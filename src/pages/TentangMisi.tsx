import { AboutMission } from "../components/AboutMission";

export function TentangMisi() {
  const aboutImages = {
    studio: "https://images.unsplash.com/photo-1604227070389-b88fd2896af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwYWludGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NjMxNzc0NTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    team: "https://images.unsplash.com/photo-1521511189395-b82252213754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwd29ya2luZ3xlbnwxfHx8fDE3NjMyMTU3NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  };

  return (
    <div className="pt-15">
      <AboutMission studioImage={aboutImages.studio} teamImage={aboutImages.team} />
    </div>
  );
}
