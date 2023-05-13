import { Link } from "react-router-dom";

export const Sidebar = () => {
    return (
      <div className="border-end p-3 vh-100">
        <div className="d-flex">
          <input type="text" className="form-control me-2" />
          <button className="btn btn-outline-success">
            <Link to='/add'>new</Link>
          </button>
        </div>

        <ul className="list-group list-group-flush">
          <li
            className="list-group-item list-group-item-action"
            role="button"
            tabindex="0"
          >
            <Link to="contact/1">contact 1</Link>
          </li>
          <li
            className="list-group-item list-group-item-action"
            role="button"
            tabindex="0"
          >
            <Link to="contact/2">contact 2</Link>
          </li>
        </ul>
      </div>
    );
}