const Sidebar = () => {
    return <div className="fixed left-0 top-1/2 transform -translate-y-1/2 flex flex-col items-start mx-5">
        <a className="underline" href="/board">archive</a>
        <a className="underline" href="/write">write</a>
        <a className="underline">m</a>
    </div>
}

export default Sidebar