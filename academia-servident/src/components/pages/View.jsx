import Backgroud from '../templates/Backgroud';
import Sidebar from '../templates/Sidebar';


function View() {

  return (
    <div className="h-full w-full">
      <Backgroud>
       <Sidebar/>     
      </Backgroud>
    </div>
  );
}

export default View;
