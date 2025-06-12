const table = React.createElement(
    "table",
    { style: { border: "1px solid black", borderCollapse: "collapse" } },
    React.createElement("tbody", null, [
        React.createElement("tr", { key: 0 }, [
            React.createElement("td", { key: 0, style: { border: "1px solid black", padding: "5px" } }, "Row 1 Col 1"),
            React.createElement("td", { key: 1, style: { border: "1px solid black", padding: "5px" } }, "Row 1 Col 2"),
        ]),
        React.createElement("tr", { key: 1 }, [
            React.createElement("td", { key: 0, style: { border: "1px solid black", padding: "5px" } }, "Row 2 Col 1"),
            React.createElement("td", { key: 1, style: { border: "1px solid black", padding: "5px" } }, "Row 2 Col 2"),
        ]),
    ])
);

// Rendering into a DOM element with id="root"
ReactDOM.createRoot(document.getElementById("root")).render(table);


const table = React.createElement(
    "table",{ border: "1" },
    React.createElement("thead",{},
        React.createElement("tr",{},
            React.createElement("th", {}, "Name"),
            React.createElement("th", {}, "Age")
        )
    )
);
