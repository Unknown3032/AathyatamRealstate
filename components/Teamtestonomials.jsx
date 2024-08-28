'use client'

import FadeIn from "@/common/fadeIn";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const demoData = [
    { url: 'https://img.freepik.com/premium-vector/actress-vector-character-illustration-flat-style_1033579-56571.jpg?uid=R132520791&ga=GA1.1.2068101962.1720854097&semt=ais_hybrid', name: "Jyoti", role: "Team Leader", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: 'https://img.freepik.com/free-photo/3d-illustration-businessman-standing-front-table-with-crossed-arms_1142-42183.jpg?t=st=1724157234~exp=1724160834~hmac=a7ced4f8c71564cceb88bca3e0c04a087945b4ebc88e54e6d1b87fb4812d271e&w=826', name: "Rahul", role: "Team Assistent", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: 'https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-846.jpg?uid=R132520791&ga=GA1.1.2068101962.1720854097&semt=ais_hybrid', name: "Aman", role: "Researcher", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." },

    { url: 'https://img.freepik.com/free-photo/3d-illustration-young-business-man-with-funny-expression-his-face_1142-55156.jpg?uid=R132520791&ga=GA1.1.2068101962.1720854097&semt=ais_hybrid', name: "Rajeev", role: "Project Manger", des: "Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows." }
]

const Teamtestonomials = () => {

    const StarIcon = () => {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-yellow-700"
            >
                <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                />
            </svg>
        );
    }

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1023, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 767, min: 0 },
            items: 1,
        },
    };


    return (
        <div className="flex gap-5 md:py-8 py-4  w-full">

            <Carousel
                responsive={responsive}
                containerClass=" mb-6  flex gap-5 w-full pl-5  "
                itemClass=" w-full md:px-2 "
                autoPlay
                autoPlaySpeed={2000}
                arrows={false}
                rewind
            >

                {
                    demoData.map((data, i) => {
                        return (
                            <FadeIn key={i} delay={0.5}>
                                <Card color="transparent" shadow={false} className="w-full max-w-[26rem] shadow-md p-5">
                                    <CardHeader
                                        color="transparent"
                                        floated={false}
                                        shadow={false}
                                        className="mx-0 flex items-center gap-4 pt-0 pb-8"
                                    >
                                        <Avatar
                                            size="lg"
                                            variant="circular"
                                            src={data?.url}
                                            alt={data?.name}
                                        />
                                        <div className="flex w-full flex-col gap-0.5">
                                            <div className="flex items-center justify-between">
                                                <Typography variant="h5" color="blue-gray">
                                                    {data?.name}
                                                </Typography>

                                            </div>
                                            <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="mb-6 p-0">
                                        <Typography>
                                            &quot;{data?.des}&quot;
                                        </Typography>
                                    </CardBody>
                                </Card>
                            </FadeIn>
                        )
                    })
                }




            </Carousel>



        </div>
    )
}

export default Teamtestonomials