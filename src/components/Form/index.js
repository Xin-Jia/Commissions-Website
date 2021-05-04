import React, { useState } from 'react';
import { Container, FormWrap, Icon, FormContent, FormOptionsWrapper, Form1, FormH1, FormLabel, FormInputArea, FormInput, FormFieldError, FormEmail } from './FormElements';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Slide from '@material-ui/core/Slide';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Form = () => {

    const [option, setOption] = useState('');
    const [budget, setBudget] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [open, setOpen] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [budgetError, setBudgetError] = useState('');

    const [nameCorrect, setNameCorrect] = useState(false);
    const [emailCorrect, setEmailCorrect] = useState(false);
    const [phoneCorrect, setPhoneCorrect] = useState(false);
    const [budgetCorrect, setBudgetCorrect] = useState(false);
    const [optionCorrect, setOptionCorrect] = useState(false);


    const classes = useStyles();

    const handleClose = () => {
        setOpen(false);
    };

    const validate = () => {
        if (nameCorrect && emailCorrect && phoneCorrect && optionCorrect && budgetCorrect) {
            return true;
        }
        return false;
    }

    const validateName = (e) => {
        if (e.target.value === "") {
            setNameError("Name required");
            setNameCorrect(false);
        }
        else if (!/^[a-zA-Z]+$/.test(e.target.value)) {
            setNameError("Invalid name");
            setNameCorrect(false);
        }
        else {
            setNameError("");
            setNameCorrect(true);
        }
    }

    const validateEmail = (e) => {
        if (e.target.value === "") {
            setEmailError("Email required");
            setEmailCorrect(false);
        }
        else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(e.target.value)) {
            setEmailError("Invalid email");
            setEmailCorrect(false);
        }
        else {
            setEmailError("");
            setEmailCorrect(true);
        }
    }

    const validatePhone = (e) => {
        if (e.target.value === "") {
            setPhoneError("Phone number required");
            setPhoneCorrect(false);
        }
        else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(e.target.value)) {
            setPhoneError("Invalid phone number");
            setPhoneCorrect(false);
        }
        else {
            setPhoneError("");
            setPhoneCorrect(true);
        }
    }

    const validateBudget = (e) => {
        if (e.target.value === "") {
            setBudgetError("Budget required");
            setBudgetCorrect(false);
        }
        else if (!/^(?:\d{1,3}(?:,\d{3})+|\d+)(?:\.\d+)?$/.test(e.target.value)) {
            setBudgetError("Invalid budget");
            setBudgetCorrect(false);
        }
        else {
            setBudgetError("");
            setBudgetCorrect(true);
        }
    }


    const sendEmail = (e) => {
        if (validate()) {
            e.preventDefault();

            emailjs.sendForm('gmail', 'phelia', e.target, 'user_6N0nlWyunizw3niADit8M')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset();
            setName('');
            setEmail('');
            setPhone('');
            setOption('');
            setBudget('');
            setNameError('');
            setEmailError('');
            setPhoneError('');
            setBudgetError('');
            setOpen(true);
        }
        else {
            console.log("form wrong")
        }
    }

    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">PHELIA</Icon>
                    <FormContent>
                        <Form1 onSubmit={sendEmail}>
                            <FormEmail>Have a question? Email me at xinjia.caoxin@gmail.com</FormEmail>
                            <FormH1>Looking for a photoshoot ? Contact me !</FormH1>
                            <FormLabel htmlFor='for'>Name</FormLabel>
                            <FormInput name="name" type="text" required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} onBlur={validateName} />
                            <FormFieldError>{nameError}</FormFieldError>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput name="email" type="email" required placeholder="abc@def.com" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail} />
                            <FormFieldError>{emailError}</FormFieldError>
                            <FormLabel htmlFor='for'>Phone Number</FormLabel>
                            <FormInput name="phone" type="text" placeholder="000-000-0000" required value={phone} onChange={(e) => setPhone(e.target.value)} onBlur={validatePhone} />
                            <FormFieldError>{phoneError}</FormFieldError>
                            <FormLabel htmlFor='for'>What are you looking for ?</FormLabel>
                            <FormOptionsWrapper>

                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label">Option</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={option}
                                        name="option"
                                        required
                                        onChange={(e) => { setOption(e.target.value); setOptionCorrect(true) }
                                        }
                                    >
                                        <MenuItem value="Portraits">Portraits</MenuItem>
                                        <MenuItem value="Social Media">Social media</MenuItem>
                                        <MenuItem value="Family">Family</MenuItem>
                                        <MenuItem value="Other">Other</MenuItem>
                                    </Select>
                                </FormControl>

                            </FormOptionsWrapper>
                            <FormLabel htmlFor='for'>What is your budget ?</FormLabel>

                            <FormOptionsWrapper>
                                <FormControl fullWidth variant="outlined">
                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        value={budget}
                                        name="budget"
                                        placeholder="00.00"
                                        required
                                        onChange={(e) => setBudget(e.target.value)}
                                        onBlur={validateBudget}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        labelWidth={0}
                                    />
                                </FormControl>
                            </FormOptionsWrapper>
                            <FormFieldError>{budgetError}</FormFieldError>

                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormInputArea name="message" type="text" placeholder="Message" />

                            <div style={{ textAlign: "center" }}>
                                <Button disabled={nameCorrect && emailCorrect && phoneCorrect && optionCorrect && budgetCorrect ? false : true}
                                    type="submit" variant="outlined"
                                    style={{ width: "50%", borderRadius: "30px", backgroundColor: "#78E11B", border: "none" }}>
                                    Send
      </Button>
                                <Dialog
                                    open={open}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                >
                                    <DialogTitle id="alert-dialog-slide-title">{"Thank You"}</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                            Your message has been sent sucessfully. I will get in touch with you soon !
          </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleClose} color="primary">
                                            Got it
          </Button>
                                    </DialogActions>
                                </Dialog>
                            </div>
                        </Form1>
                    </FormContent>
                </FormWrap>

            </Container>

        </>
    )
}

export default Form;
