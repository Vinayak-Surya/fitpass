import { useLocation, useNavigate, Link } from "react-router-dom";
import "./fundstransfer.scss";

export default function Home() {
  let route =  useLocation(); 
  let navigate = useNavigate();
  const handleBuy = (amount:any, month: any) => () => {
    return navigate("/paymentmethods", {
      state:{
          amount,
          month,
          title: route.state.title
        },
    });
  }
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
    <div className="col-md-8">
      <div><h2>{route.state.title}</h2></div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/subscriptions">Subcriptions</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{route.state.title}</li>
        </ol>
      </nav>
      <div className="row row-cols-1 row-cols-md-3 mb-3">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">12 MONTH</h4>
          </div>
          <div className="card-body">
            <div className="border-box">
              <h5 className="card-title pricing-card-title">£21,990</h5>
              <div>£1,517 / month |  No-cost EMI available</div>
            </div>
            <ul className="mt-3 mb-4 list">
              <li><span>FREE 2.5 months extension</span></li>
              <li><span>£1,500 amazon voucher</span></li>
              <li><span>EXTRA £1,500 OFF applied</span></li>
              <li><span>FREE FitStart benefits worth £,7699* center access</span></li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary" onClick={handleBuy(21990, '12 MONTH')}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">6 MONTH</h4>
          </div>
          <div className="card-body">
            <div className="border-box">
              <h5 className="card-title pricing-card-title">£17,390</h5>
              <div>£2,174 / month |  No-cost EMI available</div>
            </div>
            <ul className="mt-3 mb-4 list">
              <li><span>EXTRA £1,500 OFF applied</span></li>
              <li><span>£750 amazon voucher</span></li>
              <li><span>FREE 2 months extension</span></li>
              <li><span>25 days of membership pause</span></li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleBuy(17390, '6 MONTH')}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">3 MONTH</h4>
          </div>
          <div className="card-body">
            <div className="border-box">
              <h5 className="card-title pricing-card-title">£12,990</h5>
              <div>£3,248 / month |  No-cost EMI available</div>
            </div>
            <ul className="mt-3 mb-4 list">
              <li><span>FREE 2.5 months extension</span></li>
              <li><span>£1,500 amazon voucher</span></li>
              <li><span>EXTRA £1,500 OFF applied</span></li>
              <li><span>FREE FitStart benefits worth £,7699* center access</span></li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleBuy(12999, '3 MONTH')}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
