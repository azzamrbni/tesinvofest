AFRAME.registerComponent('exit-link', {
  init: function () {
    this.el.addEventListener('click', function () {
      window.location.href = window.location.origin; 
    });
  }
});

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
      gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), 0.6), 0.0)), 1.0);
    }
  `
});

AFRAME.registerComponent('cursor-trail', {
  init: function () {
    this.lastPosition = new THREE.Vector3();
    this.trailInterval = null;
    this.camera = this.el.sceneEl.camera;
    
    this.createTrail = this.createTrail.bind(this);
    this.startTrail = this.startTrail.bind(this);
    this.stopTrail = this.stopTrail.bind(this);
    
    this.el.sceneEl.addEventListener('camera-set-active', () => {
      this.camera = this.el.sceneEl.camera;
    });
    
    this.startTrail();
  },
  startTrail: function() {
    this.trailInterval = setInterval(() => {
      this.createTrail();
    }, 80); 
  },
  stopTrail: function() {
    if (this.trailInterval) {
      clearInterval(this.trailInterval);
    }
  },
  tick: function() {
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
    
    const direction = new THREE.Vector3();
    this.camera.getWorldDirection(direction);
    
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
      console.log(`Loading ${numArtworks} artworks...`);

      const spacing = 15; 
      const artHeight = 4.5;  
      const wallX = 20;       
      const halfPoint = Math.ceil(numArtworks / 2);


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

        let x, z, rotationY;
        let artworkX; 
        const y = artHeight; 

        if (index < halfPoint) {
            const i_kiri = index;
            x = -wallX; 
            artworkX = -wallX + 0.05; 
            z = i_kiri * spacing; 
            rotationY = 90; 
        } else {
            const i_kanan = index - halfPoint;
            x = wallX; 
            artworkX = wallX - 0.05; 
            z = i_kanan * spacing; 
            rotationY = -90; 
        }

        const artworkEntityId = `artwork-entity-${index}`; 
        const frameAndArtEntity = document.createElement('a-entity');
        frameAndArtEntity.setAttribute('id', artworkEntityId);
        frameAndArtEntity.setAttribute('position', `${artworkX} ${y} ${z}`);
        frameAndArtEntity.setAttribute('rotation', `0 ${rotationY} 0`);

        const frameColor = '#8C7853'; 
        const frameDepth = 0.2;      
        const frameWidth = 0.5;      
        const artSize = 5.0;         
        const matteSize = artSize + 0.5; 
        const backingSize = artSize + 0.8; 

        const frameBacking = document.createElement('a-plane');
        frameBacking.setAttribute('position', '0 0 -0.02'); 
        frameBacking.setAttribute('width', backingSize);
        frameBacking.setAttribute('height', backingSize);
        frameBacking.setAttribute('color', '#8C7853'); 
        frameAndArtEntity.appendChild(frameBacking);

        const frameMatte = document.createElement('a-plane');
        frameMatte.setAttribute('position', '0 0 -0.01'); 
        frameMatte.setAttribute('width', matteSize);
        frameMatte.setAttribute('height', matteSize);
        frameMatte.setAttribute('color', '#F5F5F5'); 
        frameAndArtEntity.appendChild(frameMatte);
        
        const artwork = document.createElement('a-image');
        artwork.setAttribute('src', `#${artId}`);
        artwork.setAttribute('width', artSize);
        artwork.setAttribute('height', artSize);
        artwork.setAttribute('position', '0 0 0'); 
        artwork.setAttribute('material', { shader: 'flat', side: 'double', transparent: false });
        
        artwork.classList.add('clickable');
        artwork.classList.add('artwork-frame');
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
        
        frameAndArtEntity.appendChild(artwork);
        container.appendChild(frameAndArtEntity);


        const urlParts = product_url.split('/');
        const productSlug = urlParts[urlParts.length - 1] || `Artwork ${index + 1}`;
        const productTitle = productSlug
          .replace(/-/g, ' ')
          .replace(/\b\w/g, l => l.toUpperCase())
          .substring(0, 40); 

        const plaqueEntity = document.createElement('a-entity');
        
        const plaqueY = (artHeight) + (backingSize/2) + (0.8/2) + 0.2;
        plaqueEntity.setAttribute('position', `${artworkX} ${plaqueY} ${z}`);
        plaqueEntity.setAttribute('rotation', `0 ${rotationY} 0`);

        const plaqueBase = document.createElement('a-plane');
        plaqueBase.setAttribute('position', '0 0 0');
        plaqueBase.setAttribute('rotation', '0 0 0'); 
        plaqueBase.setAttribute('width', 4.5);   
        plaqueBase.setAttribute('height', 0.8);  
        plaqueBase.setAttribute('color', '#B8A947'); 
        plaqueEntity.appendChild(plaqueBase);

        const titleText = document.createElement('a-text');
        titleText.setAttribute('value', productTitle);
        titleText.setAttribute('position', '0 0 0.01'); 
        titleText.setAttribute('rotation', '0 0 0'); 
        titleText.setAttribute('align', 'center');
        titleText.setAttribute('color', '#333333'); 
        titleText.setAttribute('width', 4.2); 
        titleText.setAttribute('font', 'https://cdn.aframe.io/fonts/Exo2Bold.fnt');
        plaqueEntity.appendChild(titleText);
        
        container.appendChild(plaqueEntity);

        const spotLight = document.createElement('a-entity');
        spotLight.setAttribute('light', {
          type: 'spot',
          color: '#FFF8E1', 
          intensity: 1.5,
          angle: 35,         
          penumbra: 0.3,     
          target: `#${artworkEntityId}` 
        });
        
        let lightX = (x < 0) ? -17 : 17; 
        
        spotLight.setAttribute('position', `${lightX} 12 ${z}`); 
        
        container.appendChild(spotLight);

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