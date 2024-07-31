import { Link } from "react-router-dom";
import "./home.scss";


export default function Home() {

  return (
    <>
    <h2 className="ml-3 mb-4">Dashboard</h2>
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
        <div className="col-md-2">
          <Link to="/subscriptions" className="row text-decoration pointer-cursor g-0 border bgwhite rounded h-140 mb-4 shadow-sm align-center">
            <div>
              <img width={70} src="/assets/subscription.jpeg" /></div>
            <div aria-label="Subscription Plan" className="mt-3 link">Subscription Plan</div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="#" className="row text-decoration pointer-cursor g-0 border bgwhite rounded h-140 mb-4 shadow-sm align-center">
            <div><img width={90} src="/assets/personal-coach.jpeg" /></div>
            <div aria-label="Personal Coach" className="mt-3 link">Personal Coach</div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="#" className="row text-decoration pointer-cursor g-0 border bgwhite rounded h-140 mb-4 shadow-sm align-center">
            <div><img width={70} src="/assets/wearables.jpeg" /></div>
            <div aria-label="Wearables" className="mt-3 link">Wearables</div>
          </Link>
        </div>
      </div>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
        <div className="col-md-2">
          <Link to="#" className="row text-decoration pointer-cursor g-0 border bgwhite rounded h-140 mb-4 shadow-sm align-center">
            <div>
              <img width={70} src="/assets/challanges.jpeg" /></div>
            <div aria-label="Challanges" className="mt-3 link">Challenges</div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="#" className="row text-decoration pointer-cursor g-0 border bgwhite rounded h-140 mb-4 shadow-sm align-center">
            <div><img width={70} src="/assets/insurance.jpeg" /></div>
            <div aria-label="Insurance" className="mt-3 link">Insurance</div>
          </Link>
        </div>
        <div className="col-md-2">
          <Link to="#" className="row text-decoration pointer-cursor g-0 border bgwhite rounded h-140 mb-4 shadow-sm align-center">
            <div><img width={85} src="/assets/inapps.jpeg" /></div>
            <div aria-label="Inapps" className="mt-3 link">Inapps</div>
          </Link>
        </div>
      </div>
    </div>
  </>
  );
}
