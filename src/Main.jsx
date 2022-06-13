import "./Main.css"

const Main = () => {
    return (
        <div className="Main">
            <div className="img">
                <img src={"https://source.unsplash.com/gYl-UtwNg_I/1500x1500"} alt={"gora"}/>
                <div className="hey">HEY</div>
            </div>
            <div className="img">
                <img src={"https://source.unsplash.com/rFKUFzjPYiQ/1500x1500"} alt={"more"}/>
                <div className="lets">LET'S</div>
            </div>
            <div className="img">
                <img
                    src={"https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=fac" +
                        "es&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d"}
                    alt={"tropa"}/>
                <div className="give">GIVE</div>
            </div>
            <div className="img">
                <img src={"https://source.unsplash.com/ITjiVXcwVng/1500x1500"} alt={"lisa"}/>
                <div className="all">ALL</div>
            </div>
            <div className="img">
                <img src={"https://source.unsplash.com/3MNzGlQM7qs/1500x1500"} alt={"oblako"}/>
                <div className="youCan">YOU CAN</div>
            </div>
        </div>
    );
}

export default Main;