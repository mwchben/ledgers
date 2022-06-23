import "../css/moderator.css"

export default function Moderator() {
    return (
        <>
            <div className="main">
                <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a class="nav-link active" id="actions-tab" data-bs-toggle="tab" data-bs-target="#actions-tab-pane" type="button" role="tab" aria-controls="actions-tab-pane" aria-selected="true" href="#">
                            <i class="bi bi-grid-3x3-gap-fill" />
                            <br />Actions
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a class="nav-link" id="voters-tab" data-bs-toggle="tab" data-bs-target="#voters-tab-pane" type="button" role="tab" aria-controls="voters-tab-pane" aria-selected="true" href="#">
                            <i class="bi bi-people-fill" />
                            <br />Voters
                        </a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a class="nav-link" id="votes-tab" data-bs-toggle="tab" data-bs-target="#votes-tab-pane" type="button" role="tab" aria-controls="votes-tab-pane" aria-selected="true" href="#">
                            <i class="bi bi-123" />
                            <br />Votes
                        </a>
                    </li>
                </ul>
            </div>

        </>
    );
};
