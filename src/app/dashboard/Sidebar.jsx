import Link from "next/link";

const NavLink =[
  {path: '/dashboard',
    title: 'Dashboard' 
  },
  {path: '/dashboard/add-product',
    title: 'Add Products' 
  },
  {path: '/dashboard/manageProduct',
    title: 'manageProduct' 
  },
  {path: '/',
    title: 'Home' 
  },
]
const Sidebar = () => {
  return (
    <aside className="mr-10 border">
      <h1 className="text-3xl font-semibold">DashBoard</h1>
      <ul>
        {
          NavLink.map(({path, title}) => <li key={path}>
            <Link href={path}>{title}</Link>
          </li>)
        }
      </ul>
    </aside>
  );
};

export default Sidebar;