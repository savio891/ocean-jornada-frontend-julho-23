import "../Card/Header.css"

export default function Header() {
    return(
        <>
            <div className="box-header">
                <img src="../../../public/ocean.png"  />
                <div className="header-menu">
                    <a href="#">Home</a>
                    <a href="#">Criar</a>
                </div>
            </div>
        </>
    )
}