// import {Context as context} from "../../shared/context"
import "./applycard.scss";

export default function Home() {
  // const auth = context();
  
  const handlePay = () => {
    
  }

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 justify-content">
    <div className="col-md-4">
      <div><h4>Amazon pay fitpass natwest credit card</h4></div>
      <div className="row g-0 border bgwhite rounded shadow-sm">
        <div className="col-md-4 p28">
          <img src="src/assets/creditcard.jpeg" className="creditcard" width={120} />
        </div>
        <div className="col-md-6 cards-box">
          <div className="subs">5%</div>
          <div className="cashback5">cashback'</div>
          <div className="subscription">on subscriptions</div>
        </div>
      </div>
      <div className="approved">Get card approved in just 60 sec</div>
      <div className="row g-0 border pad0 bgwhite rounded  shadow-sm">
        <table className="cashback">
          <tbody>
          <tr>
            <td>
              <div className="row">
                <div className="col-md-4"><div className="percent">5%</div></div>
                <div className="col-md-6"><span className="font-w">cashback'</span> on plans</div>
              </div>
            </td>
            <td>
              <div className="row">
                <div className="col-md-4"><div className="percent">2%</div></div>
                <div className="col-md-6"><span className="font-w">cashback'</span> on variables</div>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="row">
                <div className="col-md-4"><div className="percent">1%</div></div>
                <div className="col-md-6"><span className="font-w">cashback'</span> on inapps</div>
              </div>
            </td>
            <td>
              <div className="row">
                <div className="col-md-4"><div className="percent">0</div></div>
                <div className="col-md-6"><span className="font-w">cost EMI</span> for 3 & 6 months</div>
              </div>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div className="rewards"><img src="src/assets/rewards.webp" width={50} /> Apply & get rewards worth <sup>£</sup>2000'</div>
      <div className="row g-0 border pad0 bgwhite rounded mb-4 shadow-sm">
        <div className="row row-pad">
          <div className="application mb-3">
            <div className="mt-2 mb-3 ">Your application will be linked to</div>
            <div className="phno">9910707623</div>
          </div>
          <button type="button" className="w-100 btn btn-lg btn-primary" onClick={handlePay}>Get card in 60 seconds</button>
        </div>
      </div>
    </div>
    </div>
  );
}
