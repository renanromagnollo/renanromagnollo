const hero = require('./hero.json');
const tecnologies = require('./tecnologies.json')
const techskills = require('./techskills.json')
const socials = require('./socials.json')
const blogs = require('./blogs.json')
const projects = require('./projects.json')


module.exports = () => ({
    hero,
    tecnologies,
    techskills,
    socials,
    blogs,
    projects
})