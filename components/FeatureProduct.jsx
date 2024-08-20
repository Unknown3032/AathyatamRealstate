'use client'

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

const CheckIcon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-3 w-3 bg-grey rounded-full "
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
            />
        </svg>
    );
}

const FeatureProduct = () => {
    return (
        <div className="paddingX flex flex-col w-full md:flex-row lg-max:gap-5 ">

            {/* image  */}
            <div className="md:w-[60%] w-full lg:bg-grey">
                <img className="object-cover hover:cursor-pointer duration-300 hover:opacity-70 h-full w-full" src={'/featureimg.jpg'} alt="" />
            </div>


            <Card variant="gradient "
                className="md:w-[40%] lg:pl-5 paddingX  w-full md:p-8 py-8  rounded-none lg:bg-grey shadow-none "
            >
                <div
                    className="m-0 mb-8 w-full rounded-none border-b -mt-4 lg:mt-0 border-black/10 pb-4 lg:pb-8 md:text-center"
                >
                    Title
                </div>

                <CardBody className="p-0">
                    <ul className="flex flex-col gap-2 lg:gap-4">
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">5 team members</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">200+ components</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">40+ built-in pages</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">1 year free updates</Typography>
                        </li>
                        <li className="flex items-center gap-4">
                            <span className="rounded-full border border-white/20 bg-white/20 p-1">
                                <CheckIcon />
                            </span>
                            <Typography className="font-normal">
                                Life time technical support
                            </Typography>
                        </li>
                    </ul>
                </CardBody>
                <CardFooter className="mt-12 p-0 w-full">
                    <Button
                        size="lg"
                        color="white"
                        className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100  duration-300 lg:mt-10 hover:bg-black hover:text-white"
                        ripple={false}
                        fullWidth={true}
                    >
                        Buy Now
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default FeatureProduct