import { Link } from "gatsby"
import React from "react"
// import ScrollAnimation from "react-animate-on-scroll"

const Header = ({ siteTitle, location, showTitle }) => {
  // console.log('showTitle', showTitle);
  return (
    <Nav
      className="animated fadeInDown"
      siteTitle={siteTitle}
      location={location}
      showTitle={showTitle}
    />
  )
}

/* App.jsx */
class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false,
      path: props.location.pathname,
    }
    //console.log("nav state", this.state.path)
  }

  handleMenuClick() {
    this.setState({ menuOpen: !this.state.menuOpen })
  }

  handleLinkClick(val) {
    this.setState({ menuOpen: false })
  }

  componentDidMount(location) {
    this.setState({ path: this.props.location.pathname })
  }

  render() {
    const styles = {
      container: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "99",
        opacity: 0.9,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        color: "white",
        background: this.props.showTitle ? "rgba(25,25,25,0.25)" : null,
      },
      logo: {
        margin: "0 1rem",
        textTransform: "uppercase",
        color: "white",
      },
      link: {
        color: "white",
      },
      body: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        filter: this.state.menuOpen ? "blur(2px)" : null,
        transition: "filter 0.5s ease",
      },
    }
    const menu = [
      { link: "Home", path: "/" },
      { link: "About", path: "/#About" },
      { link: "More", path: "/#More" },
      { link: "Blog", path: "/#Blog" },
      { link: "Connect", path: `${this.state.path}#Connect` },
    ]
    // console.log("props", this.props)
    const menuItems = menu.map((val, index) => {
      return (
        <MenuItem
          key={index}
          delay={`${index * 0.1}s`}
          onClick={() => {
            this.handleLinkClick(val)
          }}
        >
          {val}
        </MenuItem>
      )
    })
    return (
      <div>
        <div className="animated fadeInDown" style={styles.container}>
          {this.props.showTitle ? (
            <div style={styles.logo}>
              <Link to="/" style={styles.link}>
                {this.props.siteTitle}
              </Link>
            </div>
          ) : (
            <div />
          )}
          <MenuButton
            open={this.state.menuOpen}
            onClick={() => this.handleMenuClick()}
            color="white"
          />
        </div>
        <Menu open={this.state.menuOpen}>{menuItems}</Menu>
      </div>
    )
  }
}

/* MenuItem.jsx*/
class MenuItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false,
    }
  }

  handleHover() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    const styles = {
      container: {
        opacity: 0,
        animation: "1s appear forwards",
        animationDelay: this.props.delay,
      },
      menuItem: {
        fontFamily: `'Open Sans', sans-serif`,
        fontSize: "1.2rem",
        padding: "1rem 0",
        margin: "0 5%",
        cursor: "pointer",
        color: this.state.hover ? "gray" : "#fafafa",
        transition: "color 0.2s ease-in-out",
        animation: "0.5s slideIn forwards",
        animationDelay: this.props.delay,
      },
      line: {
        width: "90%",
        height: "1px",
        background: "gray",
        margin: "0 auto",
        animation: "0.5s shrink forwards",
        animationDelay: this.props.delay,
      },
    }
    return (
      <div style={styles.container}>
        <Link to={this.props.children.path}>
          <div
            style={styles.menuItem}
            onMouseEnter={() => {
              this.handleHover()
            }}
            onMouseLeave={() => {
              this.handleHover()
            }}
            onClick={this.props.onClick}
          >
            {this.props.children.link}
          </div>
        </Link>
        <div style={styles.line} />
      </div>
    )
  }
}

/* Menu.jsx */
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open ? this.props.open : false,
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open })
    }
  }

  render() {
    const styles = {
      container: {
        position: "fixed",
        top: 0,
        left: 0,
        height: this.state.open ? "100%" : 0,
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "#333",
        opacity: 0.85,
        color: "#fafafa",
        transition: "height 0.3s ease",
        zIndex: 2,
      },
      menuList: {
        paddingTop: "3rem",
      },
    }
    return (
      <div style={styles.container}>
        {this.state.open ? (
          <div style={styles.menuList}>{this.props.children}</div>
        ) : null}
      </div>
    )
  }
}

/* MenuButton.jsx */
class MenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: this.props.open ? this.props.open : false,
      color: this.props.color ? this.props.color : "black",
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open })
    }
  }

  handleClick() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const styles = {
      container: {
        height: "32px",
        width: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "4px",
        margin: "0.5rem",
      },
      line: {
        height: "2px",
        width: "20px",
        background: this.state.color,
        transition: "all 0.2s ease",
      },
      lineTop: {
        transform: this.state.open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px",
      },
      lineMiddle: {
        opacity: this.state.open ? 0 : 1,
        transform: this.state.open ? "translateX(-16px)" : "none",
      },
      lineBottom: {
        transform: this.state.open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px",
      },
    }
    return (
      <div
        style={styles.container}
        onClick={
          this.props.onClick
            ? this.props.onClick
            : () => {
                this.handleClick()
              }
        }
      >
        <div style={{ ...styles.line, ...styles.lineTop }} />
        <div style={{ ...styles.line, ...styles.lineMiddle }} />
        <div style={{ ...styles.line, ...styles.lineBottom }} />
      </div>
    )
  }
}

export default Header
