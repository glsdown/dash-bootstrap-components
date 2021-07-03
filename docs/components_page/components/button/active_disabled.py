import dash_bootstrap_components as dbc
import dash_html_components as html

buttons = html.Div(
    [
        dbc.Button("Regular", color="primary", class_name="mr-1"),
        dbc.Button("Active", color="primary", active=True, class_name="mr-1"),
        dbc.Button("Disabled", color="primary", disabled=True),
    ]
)
