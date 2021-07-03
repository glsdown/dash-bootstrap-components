import dash_bootstrap_components as dbc
import dash_html_components as html
from dash.dependencies import Input, Output, State

collapse = html.Div(
    [
        dbc.Button(
            "Open collapse",
            id="collapse-button",
            class_name="mb-3",
            color="primary",
            n_clicks=0,
        ),
        dbc.Collapse(
            dbc.Card(dbc.CardBody("This content is hidden in the collapse")),
            id="collapse",
            is_open=False,
        ),
    ]
)


@app.callback(
    Output("collapse", "is_open"),
    [Input("collapse-button", "n_clicks")],
    [State("collapse", "is_open")],
)
def toggle_collapse(n, is_open):
    if n:
        return not is_open
    return is_open
