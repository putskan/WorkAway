import React, { useState } from "react";
import { useAsync } from "react-async"
import axios from 'axios'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import { serverBaseUrl } from '../../variables/network'
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import avatar from "assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};
const useStyles = makeStyles(styles);




// const fetchUserInfo = async () => {
//   console.log('fetching')
//   const token = JSON.parse(localStorage.getItem('USER_INFO')).token;
//   try {
//     console.log('try1')
//     let res = await axios({
//         url: serverBaseUrl + '/api/data/userinfo',
//         method: 'GET',
//         headers: {  
//           'token': token
//         }
//     });
//     console.log('try2')
//     if(res.status == 200){
//       console.log('resdata');
//       console.log(res.data);
//     }
//     return res.data;
//   }
//   catch (err) {
//     console.error(err);
//   }
// }
  



export default function UserProfile() {
  const classes = useStyles();
  // const { userInfo, error, isPending } = useAsync({ promiseFn: fetchUserInfo })
  // const [company, setCompany] = useState(userInfo ? userInfo.company : 'comp1');
  // const [username, setUsername] = useState(userInfo ? userInfo.username : 'useruser');
  // const [password, setPassword] = useState('pass');
  // const [email, setEmail] = useState(userInfo ? userInfo.email : 'mail@gmnail.');
  // const [firstName, setFirstName] = useState(userInfo ? userInfo.email : 'ben');
  // const [lastName, setLastName] = useState(userInfo ? userInfo.lastName : 'la');
  // const [city, setCity] = useState(userInfo ? userInfo.city : 'ko');
  // const [country, setCountry] = useState(userInfo ? userInfo.country : 'israel');
  // const [postalCode, setPostalCode] = useState(userInfo ? userInfo.postalCode : '0504');
  // const [aboutMe, setAboutMe] = useState(userInfo ? userInfo.aboutMe : '665465');
  // const [updateErrorMsg, setUpdateErrorMsg] = useState(userInfo ? userInfo.updateErrorMsg : 'dasdaasd');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [responseMsg, setResponseMsg] = useState('');
  // console.log(isPending);
  // console.log(error);
  // console.log(userInfo);
  // if (isPending) return "Loading..."
  // if (error) return `Something went wrong: ${error.message}`
  // else {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    setUserInfo({username: username, email: email, firstName: firstName,
                lastName: lastName, city: city, 
                country: country, postalCode: postalCode,
                aboutMe: aboutMe});
  }

  const setUserInfo = async (userData) => {
    console.log('setting info...')
    let res;
    const token = JSON.parse(localStorage.getItem('USER_INFO')).token;
    console.log('setting info...2')
    try {
          console.log('setting info...3')
          res = await axios({
          url: serverBaseUrl + '/api/data/setUserInfo',
          method: 'POST',
          data: userData,
          headers: {  
            'token': token
          }
      });
      if(res.status == 200){
        return setResponseMsg(res.data);
      }
    }
    catch (err) {
      return setResponseMsg(err.hasOwnProperty('response') ? err.response.data: 'Error. Please try again later');
    }
  }

  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <form noValidate onSubmit={handleOnSubmit}>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                <p className={classes.cardCategoryWhite}>Complete your profile</p>
              </CardHeader>
              <CardBody>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={5}>
                      <CustomInput
                        labelText="Company (disabled)"
                        id="company-disabled"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          disabled: true,         
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          value: username,
                          onChange: (e) => setUsername(e.target.value)
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Email address"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: email,
                          onChange: (e) => setEmail(e.target.value)
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="First Name"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: firstName,
                          onChange: (e) => setFirstName(e.target.value)
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Last Name"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: lastName,
                          onChange: (e) => setLastName(e.target.value)
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="City"
                        id="city"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: city,
                          onChange: (e) => setCity(e.target.value)
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Country"
                        id="country"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: country,
                          onChange: (e) => setCountry(e.target.value)
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Postal Code"
                        id="postal-code"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          value: postalCode,
                          onChange: (e) => setPostalCode(e.target.value)
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>About me</InputLabel>
                      <CustomInput
                        labelText="Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."
                        id="about-me"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5,
                          value: aboutMe,
                          onChange: (e) => setAboutMe(e.target.value)
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  </CardBody>
                  <CardFooter style={{ "justify-content": "left" }}>
                    <Button color="primary" type="submit">Update Profile</Button>
                    <span style={{"margin-left": "20px"}}>{responseMsg}</span>
                  </CardFooter>
              </form>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
              <h4 className={classes.cardTitle}>Alec Thompson</h4>
              <p className={classes.description}>
                Don{"'"}t be scared of the truth because we need to restart the
                human foundation in truth And I love you like Kanye loves Kanye
                I love Rick Owens’ bed design but the back is...
              </p>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
