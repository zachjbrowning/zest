import React from 'react'

export default function Home() {
    return (
        <div className="home-holder container">
            <div className="home-title">
                Welcome to Zest!
            </div>
            <div className="home-description">
                <div className="content-sub-header">
                    What is Zest?
                </div>
                <div className="home-text">
                    Good question. Well, it's a framework designed for creating minimalist websites from JSON files. 
                </div>
                <div className="content-sub-header">
                    What on earth does that even mean?
                </div>
                <div className="home-text">
                    Another good question! Story time. I started building websites. It was fun. My Dad said hey, can you build a website? I said, sure! Well, turns out that's all well and good, but when all the content he wants on the site is in his brain, there's only so much I can do... The solution - develop a framework that works with an environment that non-computery oriented people can use. The framework then takes the JSON files that have the content in them, bundles them up and BOOM! A website. Pretty neat hey?
                </div>
                <div className="content-sub-header">
                    Well how does it work then?
                </div>
                <div className="home-text">
                    The starting point of the website is in a file called main.json. In this file is information about the name of the site, the colour scheme, the different pages present in the site, the location of the JSON files for each page, and a bit of other stuff. Zest takes this, and creates the header, footer, and a skeleton of what the website will look like. Then, when you navigate to a certain page on the site, Zest will look up which JSON file corrolates to that page, go fetch it and then render the webpage as per the JSON file.
                </div>
                <div className="machine-pic">
                    <img className="machine" src="/zest/public/machine.png"/>
                </div>
                <div className="content-sub-header">
                    Why do this instead of a normal website? (Last question I promise)
                </div>
                <div className="home-text home-last">
                    The coolest part about Zest is being able to create a website from just a few JSON files. This means that you can get a site up and running literally in a couple of minutes. Zest also provides the functionality to develop your own more complex components to plugin, hence creating a very simple, lightweight starting point that can very quickly be fleshed out with more complexity.
                </div>

            </div>
        </div>
    )
}
