AFRAME.registerComponent('open-in-new-tab', {
  schema: {
    href: { default: '' }
  },
  init: function () {
    this.el.addEventListener('click', () => {
      window.open(this.data.href, '_blank');
    });
  }
});

// Static gradient shader for background
AFRAME.registerShader('gradient', {
  schema: {
    topColor: { type: 'color', default: '#1a237e', is: 'uniform' },
    bottomColor: { type: 'color', default: '#00695c', is: 'uniform' }
  },
  vertexShader: `
    varying vec3 vWorldPosition;
    void main() {
      vec4 worldPosition = modelMatrix * vec4(position, 1.0);
      vWorldPosition = worldPosition.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 topColor;
    uniform vec3 bottomColor;
    varying vec3 vWorldPosition;
    void main() {
      float h = normalize(vWorldPosition + vec3(0.0, 500.0, 0.0)).y;
      
      // Static gradient: dark blue to teal
      vec3 color1 = vec3(0.1, 0.14, 0.49); // #1a237e (top - dark blue)
      vec3 color2 = vec3(0.0, 0.52, 0.56); // #00838f (bottom - teal)
      
      vec3 finalColor = mix(color2, color1, h);
      
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
});

// Cursor trail effect component
AFRAME.registerComponent('cursor-trail', {
  init: function () {
    this.lastPosition = new THREE.Vector3();
    this.trailInterval = null;
    this.camera = this.el.sceneEl.camera;
    
    this.createTrail = this.createTrail.bind(this);
    this.startTrail = this.startTrail.bind(this);
    this.stopTrail = this.stopTrail.bind(this);
    
    // Create trail on camera rotation
    this.el.sceneEl.addEventListener('camera-set-active', () => {
      this.camera = this.el.sceneEl.camera;
    });
    
    this.startTrail();
  },
  
  startTrail: function() {
    this.trailInterval = setInterval(() => {
      this.createTrail();
    }, 80); // Create trail particle every 80ms for smoother effect
  },
  
  stopTrail: function() {
    if (this.trailInterval) {
      clearInterval(this.trailInterval);
    }
  },
  
  tick: function() {
    // Check if camera moved significantly
    const currentPos = new THREE.Vector3();
    if (this.camera) {
      this.camera.getWorldPosition(currentPos);
      const distance = currentPos.distanceTo(this.lastPosition);
      
      if (distance > 0.01) {
        this.lastPosition.copy(currentPos);
      }
    }
  },
  
  createTrail: function() {
    if (!this.camera) return;
    
    const scene = this.el.sceneEl;
    const trail = document.createElement('a-sphere');
    
    const cameraPos = new THREE.Vector3();
    this.camera.getWorldPosition(cameraPos);
    
    // Get camera direction
    const direction = new THREE.Vector3();
    this.camera.getWorldDirection(direction);
    
    // Place trail slightly in front of camera
    const trailPos = cameraPos.clone().add(direction.multiplyScalar(1.5));
    
    trail.setAttribute('position', trailPos);
    trail.setAttribute('radius', '0.05');
    trail.setAttribute('color', '#FFD700');
    trail.setAttribute('material', {
      shader: 'flat',
      opacity: 0.8,
      transparent: true,
      emissive: '#FFD700',
      emissiveIntensity: 2
    });
    
    // Fade out animation with smooth easing
    trail.setAttribute('animation', {
      property: 'material.opacity',
      to: 0,
      dur: 1200,
      easing: 'easeOutCubic'
    });
    
    trail.setAttribute('animation__scale', {
      property: 'scale',
      to: '0.05 0.05 0.05',
      dur: 1200,
      easing: 'easeOutCubic'
    });
    
    // Remove after animation
    setTimeout(() => {
      if (trail.parentNode) {
        scene.removeChild(trail);
      }
    }, 1250);
    
    scene.appendChild(trail);
  },
  
  remove: function() {
    this.stopTrail();
  }
});

AFRAME.registerComponent('artwork-loader', {
  init: async function () {
    const scene = this.el;
    const assets = document.getElementById('art-assets');
    const container = document.getElementById('artwork-container');

    try {
      const response = await fetch('artworks.csv');
      const csvData = await response.text();
      const rows = csvData.split('\n').slice(1).filter(row => row.trim());

      const numArtworks = rows.length;
      const radius = 25;

      console.log(`Loading ${numArtworks} artworks...`);

      rows.forEach((row, index) => {
        const regex = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/;
        const parts = row.split(regex).map(s => s.trim().replace(/^"|"$/g, ''));
        const product_url = parts[0];
        const image_url = parts[1];

        if (!product_url || !image_url) {
          console.warn(`Skipping invalid row ${index}`);
          return;
        }

        const artId = `art-img-${index}`;
        
        const imgAsset = document.createElement('img');
        imgAsset.setAttribute('id', artId);
        imgAsset.setAttribute('src', image_url);
        imgAsset.setAttribute('crossorigin', 'anonymous');
        
        imgAsset.addEventListener('load', () => {
          console.log(`✓ Image ${index + 1}/${numArtworks} loaded: ${image_url}`);
        });
        
        imgAsset.addEventListener('error', (e) => {
          console.warn(`✗ Image ${index + 1} failed, trying fallback...`);
          imgAsset.src = `https://via.placeholder.com/800x800/1a237e/FFD700?text=Artwork+${index + 1}`;
        });
        
        assets.appendChild(imgAsset);

        const angle = (index / numArtworks) * Math.PI * 2;
        const x = radius * Math.sin(angle);
        const z = -radius * Math.cos(angle);
        const y = 3.5;

        const artwork = document.createElement('a-image');
        artwork.setAttribute('src', `#${artId}`);
        artwork.setAttribute('width', 6);
        artwork.setAttribute('height', 6);
        artwork.setAttribute('position', `${x} ${y} ${z}`);
        
        const rotationY = THREE.MathUtils.radToDeg(angle) + 180;
        artwork.setAttribute('rotation', `0 ${rotationY} 0`);
        
        // Extract product name from URL for title
        const urlParts = product_url.split('/');
        const productSlug = urlParts[urlParts.length - 1] || `Artwork ${index + 1}`;
        const productTitle = productSlug
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase())
          .substring(0, 40); // Limit length
        
        // Create title text above artwork
        const titleText = document.createElement('a-text');
        titleText.setAttribute('value', productTitle);
        titleText.setAttribute('position', `${x} ${y + 3.5} ${z}`);
        titleText.setAttribute('align', 'center');
        titleText.setAttribute('color', '#FFD700');
        titleText.setAttribute('width', 8);
        titleText.setAttribute('font', 'https://cdn.aframe.io/fonts/Exo2Bold.fnt');
        titleText.setAttribute('side', 'double');
        titleText.setAttribute('look-at', '[camera]');
        container.appendChild(titleText);
        
        artwork.setAttribute('material', {
          shader: 'flat',
          side: 'double',
          transparent: false
        });

        artwork.classList.add('clickable');
        artwork.classList.add('artwork-frame');

        artwork.setAttribute('event-set__enter', {
          _event: 'mouseenter',
          target: '#sky-env',
          'material.color': '#ff6b9d',
          dur: 600,
          easing: 'easeInOutQuad'
        });
        artwork.setAttribute('event-set__leave', {
          _event: 'mouseleave',
          target: '#sky-env',
          'material.color': '#1a4d7a',
          dur: 600,
          easing: 'easeInOutQuad'
        });

        artwork.setAttribute('animation__mouseenter', {
          property: 'scale',
          to: '1.1 1.1 1.1',
          dur: 300,
          startEvents: 'mouseenter'
        });
        artwork.setAttribute('animation__mouseleave', {
          property: 'scale',
          to: '1 1 1',
          dur: 300,
          startEvents: 'mouseleave'
        });

        artwork.setAttribute('open-in-new-tab', {
          href: product_url
        });

        container.appendChild(artwork);
      });

      console.log('All artworks loaded into scene');
    } catch (error) {
      console.error('Error loading artworks:', error);
    }
  }
});

AFRAME.registerComponent('motion-trail', {
  init: function () {
    this.lastPosition = new THREE.Vector3();
    this.logPosition = this.logPosition.bind(this);
    this.spawnTrail = this.spawnTrail.bind(this);
    this.el.addEventListener('teleportstart', this.logPosition);
    this.el.addEventListener('teleportend', this.spawnTrail);
  },
  logPosition: function () {
    this.el.object3D.getWorldPosition(this.lastPosition);
  },
  spawnTrail: function () {
    const scene = this.el.sceneEl;
    const trail = document.createElement('a-entity');
    trail.setAttribute('position', this.lastPosition);
    trail.setAttribute('geometry', {
      primitive: 'box',
      width: 0.5,
      height: 1.5,
      depth: 0.5
    });
    trail.setAttribute('material', {
      color: 'gold',
      shader: 'flat',
      opacity: 0.8
    });
    trail.setAttribute('animation', {
      property: 'material.opacity',
      to: 0,
      dur: 1500,
      easing: 'easeOutQuad'
    });
    trail.addEventListener('animationcomplete', () => {
      scene.removeChild(trail);
    });
    scene.appendChild(trail);
  },
  remove: function () {
    this.el.removeEventListener('teleportstart', this.logPosition);
    this.el.removeEventListener('teleportend', this.spawnTrail);
  }
});