import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Button from "../../../shared/components/Button/button-base";

const CTASection = () => {
    return (
        <section id="about" className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-24">
            <div className="mx-auto max-w-7xl">
                <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/8 via-sky-500/10 to-cyan-500/10 p-8 text-center shadow-2xl shadow-slate-950/30 backdrop-blur-xl sm:p-10">
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Ready to Start Chatting?
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-slate-300">
                        Join a modern messaging experience that feels premium, responsive, and
                        easy to use across every device.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                        <Button as={Link} to="/login" variant="primary" size="lg">
                            Create Account
                            <FaArrowRight />
                        </Button>
                        <Button as={Link} to="#features" variant="glass" size="lg">
                            Explore Communities
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
