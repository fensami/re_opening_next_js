import Link from "next/link";

const NavLink  =[
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
          NavLink.map(({path, title}) => <li className="mx-2" key={path}>
            <Link href={path}>{title}</Link>
          </li>) 
        }
      </ul>
    </nav>
  );
};

export default Navbar;