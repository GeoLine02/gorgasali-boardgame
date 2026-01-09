import StatTable from "@/shared/character-stats/StatTable";
import Map from "@/shared/maps/components/Map";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black relative">
      <Map />
      <StatTable />
    </div>
  );
}
