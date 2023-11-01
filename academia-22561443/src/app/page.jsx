import Backgroud from "@/components/templates/Backgroud";
import Sidebar from "@/components/templates/Sidebar";

const HomePage = () => {
  return (
    <div className=" h-screen text-Texto-1 w-screen p-4  bg-Background-3">
      <Backgroud>
        <Sidebar />
      </Backgroud>
    </div>
  );
};
export default HomePage;
