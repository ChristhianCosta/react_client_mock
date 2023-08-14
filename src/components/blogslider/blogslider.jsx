import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickAlter.css"
import axios from "axios";

import { BlogMain, BlogAside, BlogCarousel, BlogRecent, BlogCard, Roleta, PostData } from "./blogslider";

import { PostCard } from "../posting";

export function BlogSlider() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const [listOfTests, setListOfTests] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3000/post/todos").then((response) => {
        //console.log(response.data)    
        setListOfTests(response.data)
        });

       

    }, [])

    let cat = listOfTests.filter((c)=>{
        return c.category == "teste"
    })

    let cat2 = listOfTests.filter((c)=>{
        return c.category == "teste form"
    })

    let cat3 = listOfTests.filter((c)=>{
        return c.category == "new"
    })

    return (
        <BlogMain>
            <BlogAside>
                <p>ASIDE</p>
            </BlogAside>
           
            <BlogCarousel>
                <BlogRecent>
                    <p>Recent</p>
                </BlogRecent>
                
                    <Roleta>
                        <Slider {...settings}>
                            {cat.map((value, key) => {
                                return (
                                    <div>
                                        <BlogCard >
                                            <h4  onClick={() => {
                                                navigation(`/post/${value._id}`);
                                            }} > {value.title} </h4>
                                            <PostData>
                                                <p>{value.category}</p>
                                            </PostData>
                                        </BlogCard>
                                    </div>)
                            })}
                        </Slider>
                    </Roleta>
                    <br />
                    
                    <Roleta>
                        <Slider {...settings}>
                            {cat2.map((value, key) => {
                                return (
                                    <div>
                                        <BlogCard>
                                            <h2 onClick={() => {
                                                navigation(`/post/${value._id}`);
                                            }} > {value.title} </h2>
                                            <PostData>
                                                <p>{value.category}</p>
                                            </PostData>
                                        </BlogCard>
                                    </div>)
                            })}
                        </Slider>
                    </Roleta>
                    <br />
                    
                    <Roleta>
                        <Slider {...settings}>
                            {cat3.map((value, key) => {
                                return (
                                    <div>
                                        <BlogCard>
                                            <h2 onClick={() => {
                                                navigation(`/post/${value._id}`);
                                            }} > {value.title} </h2>
                                            <PostData>
                                                <p>{value.category}</p>
                                            </PostData>
                                        </BlogCard>
                                    </div>)
                            })}
                        </Slider>
                    </Roleta>
                
            </BlogCarousel>

        </BlogMain>
    );
}
