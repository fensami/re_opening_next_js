// import NavLink from "./NavLink";

// import NavLinkUp from "./NavLinkUp";

import NavLink from "./NavLink";
const navLinks  =[
  {
    path: '/',
    title: 'home',
  },
  {
    path: '/about',
    title: 'About',
  },
  {
    path: '/profile',
    title: 'Profile',
  },
  {
    path: '/blogs',
    title: 'Blog',
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
  },
]

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between container mx-auto">
      
        <h1 className="text-xl font-bold">Re opening Next js</h1>
      <ul className="flex items-center justify-between ">
        {
          navLinks.map(({path, title}) => <li className="mx-2" key={path}>
            <NavLink exact={path === '/'} activeClassName='bg-blue-500' href={path}>{title}</NavLink>
          </li>) 
        }
      </ul>
    </nav>
  );
};

export default Navbar;