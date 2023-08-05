import NavLink from "@/components/NavLink";

// import NavLink from "@/components/NavLink";
const navLinks =[
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
          navLinks.map(({path, title}) => <li key={path}>
            <NavLink exact activeClassName='text-blue-500' href={path}>{title}</NavLink>
          </li>)
        }
      </ul>
    </aside>
  );
};

export default Sidebar;