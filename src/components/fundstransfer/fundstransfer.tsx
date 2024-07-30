import { useLocation, useNavigate } from "react-router-dom";
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
    <div className="row row-cols-1 pad10 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
    <div className="col-md-8">
      <div><h2>{route.state.title}</h2></div>
      {/* <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/subscriptions">Subcriptions</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{route.state.title}</li>
        </ol>
      </nav> */}
      <div className="row row-cols-1 row-cols-md-3 mb-3">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">12 MONTH</h4>
          </div>
          <div className="card-body">
            <div className="border-box">
              <h5 className="card-title pricing-card-title">£89.99</h5>
              <div>£7.50 / month |  No-cost EMI available</div>
            </div>
            <ul className="mt-3 mb-4 list">
              <li><span>FREE 3 months extension</span></li>
              <li><span>£45 amazon voucher</span></li>
              <li><span>EXTRA 20% OFF applied</span></li>
              <li><span>FREE FitStart benefits worth £45* center access</span></li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-primary" onClick={handleBuy(89.99, '12 MONTH')}>Buy Now</button>
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
              <h5 className="card-title pricing-card-title">£49.99</h5>
              <div>£8.33 / month |  No-cost EMI available</div>
            </div>
            <ul className="mt-3 mb-4 list">
              <li><span>FREE 2 months extension</span></li>
              <li><span>£25 amazon voucher</span></li>
              <li><span>EXTRA 15% OFF applied</span></li>
              <li><span>FREE FitStart benefits worth £25* center access</span></li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleBuy(49.99, '6 MONTH')}>Buy Now</button>
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
              <h5 className="card-title pricing-card-title">£29.99</h5>
              <div>£9.99 / month |  No-cost EMI available</div>
            </div>
            <ul className="mt-3 mb-4 list">
              <li><span>FREE 1 month extension</span></li>
              <li><span>£15 amazon voucher</span></li>
              <li><span>EXTRA 10% OFF applied</span></li>
              <li><span>FREE FitStart benefits worth £10* center access</span></li>
            </ul>
            <button type="button" className="w-100 btn btn-lg btn-outline-primary" onClick={handleBuy(29.99, '3 MONTH')}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}
