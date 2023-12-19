const hero = require('./hero.json');
const tecnologies = require('./tecnologies.json')
const techskills = require('./techskills.json')
const socials = require('./socials.json')
const blog = require('./blog.json')
const projects = require('./projects.json')
// const project = require('./project.json')
const instagramFeed = require('./instagram-feed.json')


module.exports = () => ({
    hero,
    tecnologies,
    techskills,
    socials,
    blog,
    projects,
    instagramFeed
})