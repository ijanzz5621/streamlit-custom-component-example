import streamlit as st
from discrete_slider import discrete_slider

# Add some test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run my_component/example.py`

st.subheader("Component with constant args")

# Create an instance of our component with a constant `name` arg, and
# print its output value.
selected_option = discrete_slider(options=["test 1", "test 2", "test 3", "test 4", "test 5"])

if selected_option:
    st.markdown("You've selected %s option!" % selected_option)
else:
    st.markdown("No option is being selected!")
# st.markdown("---")
# st.subheader("Component with variable args")

# # Create a second instance of our component whose `name` arg will vary
# # based on a text_input widget.
# #
# # We use the special "key" argument to assign a fixed identity to this
# # component instance. By default, when a component's arguments change,
# # it is considered a new instance and will be re-mounted on the frontend
# # and lose its current state. In this case, we want to vary the component's
# # "name" argument without having it get recreated.
# name_input = st.text_input("Enter a name", value="Streamlit")
# num_clicks = discrete_slider(greeting="Hello User 2", name=name_input, key="foo")
# st.markdown("You've clicked %s times!" % int(num_clicks))
