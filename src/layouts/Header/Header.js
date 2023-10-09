import "./Header.css"


function Header(props) {

    const {user} = props;

    return (
        <header>

            <h1>TASK APP</h1>
            <nav></nav>
            <div className="user-container">{user.name}</div>

        </header>
    )
}

export default Header;