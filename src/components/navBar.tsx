import { Link } from "react-router-dom";
import {Context as context} from "../shared/context"
const logout = (e:any) => {
  e.preventDefault();
  sessionStorage.removeItem("logged");
  window.location.href="/";
}
function capitalize(name: string){
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export function NavBar() {
  const auth = context();
  return (
    <header className="header">
      <div className="row d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <div className="col-md-6">
          <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/">
            <div className="float-l logo"><img width={120} src="/assets/logo.jpeg" /></div>
            <div className="title mt-3">Bank of APIs Summer Hackthon</div> 
          </Link>
        </div>
        <div className="col-md-6 float-r">
        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <div className="me-3 py-2 link-body-emphasis text-decoration-none">Welcome <span className="font-b">{capitalize(auth.state.name)}</span></div>
          <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/home">Home</Link>
          <Link className="me-3 py-2 link-body-emphasis text-decoration-none" to="/" onClick={logout}>Logout</Link>
        </nav>
        </div>
      </div>
    </header>
  );
}
