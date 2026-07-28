import NavItems from './NavItems'

const Sidebar = () => {
  return (
    <aside className="flex w-60 flex-col border-r p-4">
      <h1 className="mb-6 text-xl font-bold">ToDo</h1>
      <NavItems />
    </aside>
  )
}

export default Sidebar
