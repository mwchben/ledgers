import "../css/moderator.css"

export default function Moderator() {
    return (
        <>
            <div className="main">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#"><i class="bi bi-grid-3x3-gap-fill"></i><br />Actions</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "><i class="bi bi-people-fill"></i><br />Voters</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link "><i class="bi bi-123"></i><br />Votes</a>
                    </li>
                </ul>
            </div>

        </>
    );
};
