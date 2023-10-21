import Backgroud from '../templates/Backgroud';
import Sidebar from '../templates/Sidebar';
import Body1 from '../templates/Body1';

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
