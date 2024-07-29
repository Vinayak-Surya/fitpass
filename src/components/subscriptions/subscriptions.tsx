import { useNavigate } from 'react-router-dom';
import "./subscriptions.scss";

export default function Home() {
  let navigate = useNavigate();
  const handleBuy = (title:any) => () => {
    return navigate("/plans-pricing", {
      state:{
          title,
        },
    });
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
    <div className="col-md-4">
      <div><h2>Subscriptions</h2></div>
      <div className="row g-0 border bgwhite rounded mb-4 shadow-sm">
        <div className="col-md-8">
          <div className="paddingall">
          <h4 className="mb-0">Fitpass ELITE</h4>
          <p className="mt-3 card-text mb-auto">Unlimited access to all group classes, Elite & Pro Gyms</p>
          </div>
        </div>
        <div className="col-md-4">
          <div>starting at £1,325 / month</div>
          <button type="button" onClick={handleBuy('Fitpass ELITE')} className="w-100 mt-2 btn btn-lg btn-primary">Buy</button>
        </div>
      </div>
      <div className="row g-0 border bgwhite rounded mb-4 shadow-sm">
        <div className="col-md-8">
          <div className="paddingall">
          <h4 className="mb-0">Fitpass PRO</h4>
          <p className="mt-3 card-text mb-auto">Unlimited access to all Pro Gyms</p>
          </div>
        </div>
        <div className="col-md-4">
          <div>starting at £983/ month</div>
          <button type="button" onClick={handleBuy('Fitpass PRO')} className="w-100 mt-2 btn btn-lg btn-primary">Buy</button>
        </div>
      </div>
      <div className="row g-0 border bgwhite rounded mb-4 shadow-sm">
        <div className="col-md-8">
          <div className="paddingall">
          <h4 className="mb-0">Fitpass SELECT</h4>
          <p className="mt-3 card-text mb-auto">Unlimited access to single center</p>
          </div>
        </div>
        <div className="col-md-4">
          <div>starting at £883 / month</div>
          <button type="button" onClick={handleBuy('Fitpass SELECT')} className="w-100 mt-2 btn btn-lg btn-primary">Buy</button>
        </div>
      </div>
    </div>
    </div>
  );
}
