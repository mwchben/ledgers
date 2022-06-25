
import "../css/student.css"


export default function Student() {
    return (
        <>
            <ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <a class="nav-link active" id="actions-tab" data-bs-toggle="tab" data-bs-target="#actions-tab-pane" type="button" role="tab" aria-controls="actions-tab-pane" aria-selected="true" href="#">
                        <i class="bi bi-grid-3x3-gap-fill" />
                        <br />Details
                    </a>
                </li>
                <li className="nav-item" role="presentation">
                    <a class="nav-link" id="voters-tab" data-bs-toggle="tab" data-bs-target="#voters-tab-pane" type="button" role="tab" aria-controls="voters-tab-pane" aria-selected="true" href="#">
                        <i class="bi bi-people-fill" />
                        <br /> Vote
                    </a>
                </li>
            </ul>
            <div class="tab-content content" id="myTabContent">
                <div class="tab-pane fade show active" id="actions-tab-pane" role="tabpanel" aria-labelledby="actions-tab" tabindex="0">
                    <table class="table caption-top">
                        <caption>List of Candidates</caption>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Manifesto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <th><img src="https://pbs.twimg.com/profile_images/657824043/67.jpg" className="img-thumbnail" alt="candidate_image" /></th>
                                <td>Mark</td>

                                <td><button class="btn">Download <i class="bi bi-cloud-arrow-down-fill" style={{ fontSize: "2 rem" }}></i> </button></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <th><img src="https://pbs.twimg.com/profile_images/657824043/67.jpg" className="img-thumbnail" alt="candidate_image" /></th>
                                <td>Mark</td>

                                <td><button class="btn">Download <i class="bi bi-cloud-arrow-down-fill" style={{ fontSize: "2 rem" }}></i> </button></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <th><img src="https://pbs.twimg.com/profile_images/657824043/67.jpg" className="img-thumbnail" alt="candidate_image" /></th>
                                <td>Mark</td>

                                <td><button class="btn">Download <i class="bi bi-cloud-arrow-down-fill" style={{ fontSize: "2 rem" }}></i> </button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="voters-tab-pane" role="tabpanel" aria-labelledby="voters-tab" tabindex="0">
                    <div id="home" className="container-fluid text-center">

                        <h3>Welcome: Name</h3>
                        <p>You are registered as a Voter</p>
                        <hr />
                        <hr />
                        <form>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
                                <label class="form-check-label" for="gridRadios1">
                                    Candidate 1
                                </label>
                            </div>

                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                <label class="form-check-label" for="gridRadios2">
                                    Candidate 2
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                                <label class="form-check-label" for="gridRadios3">
                                    Candidate 3
                                </label>
                            </div>

                            <button type="submit" class="btn btn-primary">Vote</button>
                        </form>
                        <hr />
                        <hr />
                        <blockquote>
                            <p>Voting results will be released after voting session ends</p>
                        </blockquote>
                    </div>
                </div>

            </div>
        </>
    );
};
