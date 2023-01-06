import {
    Container,
    Footer,
    Header,
    Main,
} from "./styles";

import {
    CaretUp,
    CaretDown,
    Timer,
    Wrench,
    UsersThree,
    Chats,
    ShareNetwork,
    ChartLineUp,
} from "phosphor-react";
import { GetStartedButton } from "../../components/GetStartedButton";
import { api } from "../../services/api";
import { PlanBox } from "../../components/PlanBox";

interface IPlanResponse {
    name: string;
    course_count_limit: number;
    id: string;
    type: string;
    value: number | null;
    description: string | null;
    isFree: boolean;
    dashboard_available: boolean;
}

const imgLink = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const { data } = await api.get("/plan");

export function LandingPage(){
    return (
        <Container>
            <Header>
                <div className="logoDiv">
                    <span>CP</span>
                    <p>Course Plataform</p>
                </div>
                <div className="menuDiv">
                    <a href="/">Home</a>
                    <a href="#">Pricing</a>
                    <button>
                        Help <CaretDown size={18}/>
                    </button>
                    <a href="#">About Us</a>
                </div>
                <div className="actionsDiv">
                    <a href="/login" className="login">Login</a>
                    <a href="/signup" className="signup">Sign up</a>
                </div>
            </Header>
            <Main>
                <section className="getStarted">
                    <div className="introduction">
                        <h1><span>Share</span> or <span>acquire</span> knowledge</h1>
                        <p>Creating or taking a course anywhere, anytime has never been easier</p>
                        <div className="back"></div>
                        <div className="buttons">
                            <GetStartedButton />
                        </div>
                    </div>
                    <div className="image">
                        <img src={imgLink} alt="Corse Image" />
                    </div>
                </section>
                <section className="why">
                    <div className="text">
                        <h1>Why is our platform <span>the best</span> for you?</h1>
                        <p>Now it has become easier to take a course, or even create a course, gain or Share knowledge with the community.</p>
                        <GetStartedButton />
                    </div>
                    <div className="reasons">
                        <div>
                            <div>
                                <Timer size={50} className="icon"/>
                                <p>With CP you can create your online course more easily and quickly.</p>
                            </div>
                            <div>
                                <Wrench size={50} className="icon"/>
                                <p>Ready resources for creating online courses.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <UsersThree size={50} className="icon"/>
                                <p>Creating student communities for debates on courses or related topics.</p>
                            </div>
                            <div>
                                <Chats size={50} className="icon"/>
                                <p>Realtime chat integrated into the platform.</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <ShareNetwork size={50} className="icon"/>
                                <p>Sharing and dissemination tools.</p>
                            </div>
                            <div>
                                <ChartLineUp size={50} className="icon"/>
                                <p>Integrated admin and student panel.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="plans">
                    <div>
                        <h1 className="title">Discover our plans</h1>
                    </div>
                    <div className="planList">
                        {
                                data ? 
                                data.map((plan: IPlanResponse) => {
                                    return <PlanBox
                                        key={plan.id}
                                        course_count_limit={plan.course_count_limit}
                                        id={plan.id}
                                        name={plan.name}
                                        type={plan.type}
                                        isFree={plan.isFree}
                                        description={plan.description}
                                        value={plan.value}
                                        dashboard_available={plan.dashboard_available}
                                    />
                                })
                                :
                                null
                        }
                    </div>
                </section>
            </Main>
            <Footer>
                <p>Developed By <a href="https://github.com/KauaLima06" target={"_blank"}>Kauã Lima</a></p>
            </Footer>
        </Container>
    )
}