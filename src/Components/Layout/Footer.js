import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
        <div class="container-fluid">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">&copy; 2022 Company, Inc</p>

        <Link className="navbar-brand textNav" to="#"><span className='name'>Nirman</span> </Link>
    
        <ul class="nav col-md-4 justify-content-end">
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-muted">Home</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-muted">Apartments</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-muted">Construction</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-muted">FAQs</Link></li>
            <li class="nav-item"><Link to="#" class="nav-link px-2 text-muted">About</Link></li>
        </ul>
        </footer>
    </div>
    </div>
  );
};

export default Footer;
