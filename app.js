const express = require("express");

const path = require("path");

const app = express();

app.set("view engine", "pug");

app.set("views", `${__dirname}`);

app.use(express.static(path.join(__dirname,"public")));

const links = [
    { href: "/", text: "Home" },
    { href: "/sobre", text: "Sobre" },
    { href: "/produtos", text: "Produtos" },
    { href: "/time", text: "Nosso Time" },
    { href: "/contato", text: "Contato" },           
]

app.get("/", (req, res) => {
    res.render("index", {
        title: "Meu portal",
        links: links
    })
})

app.get("/sobre", (req, res) => {
    res.render("sobre", {
        title: "Sobre",
        links: links
    })
})

app.get("/produtos", (req, res) => {
    res.render("produtos", {
        title: "Produtos",
        links: links
    })
})

app.get("/time", (req, res) => {
    res.render("time", {
        title: "Nosso time",
        links: links,
        members: [
            { name: "Marea Morisson", function: "Director", gender: "men", photo: 67, description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum voluptatibus obcaecati nemo esse nulla quasi incidunt vel, sint illum consectetur minima voluptate, perferendis quo corrupti cum asperiores, facilis praesentium repudiandae!" },
            { name: "Samira Santinis", function: "Consultor", gender: "women", photo: 34, description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, quidem. Numquam, aspernatur. Officia id rerum unde dicta fuga quos laudantium, quod eum quae inventore! Inventore ipsa reprehenderit placeat magni quo!" },
            { name: "Joshua Jojovich", function: "Designer", gender: "men", photo: 15, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum obcaecati, suscipit laboriosam ea commodi ipsam quaerat perspiciatis inventore saepe quasi voluptas voluptates ullam dolorem magni veritatis consequuntur dolorum eum voluptatem." },
            { name: "Marie Bernard", function: "Designer", gender: "women", photo: 55, description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi id, eaque odio voluptates placeat quod quidem veritatis itaque accusamus expedita dignissimos enim totam sunt adipisci impedit repellat fugiat ex. Amet." },
        ]
    })
})

app.get("/contato", (req, res) => {
    res.render("contato", {
        title: "Contato",
        links: links
    })
})

app.listen(8000, () => console.log("Server running"));