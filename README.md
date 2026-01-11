# Assumptions
-Pricing is mocked
-Addresses are plain text


# 1.Pickup & Drop Details
-Pickup and drop address inputs
-Business-logic based address validation
-Prevents:
     -Empty values
     -Same pickup & drop locations
-optional delivery notes
-"Next " button enabled only when inputs are valid

-------

# 2.Package Details
-Package size selection (small/medium/large)
-weight input with live validation
-Back and Next navigation support

# 3.Pricing & Order Summary
-Combined pricing and summary screen
-Displays:
        -pickup & drop details
        -package details
        -Fare breakdown
-Express vs normal delivery selection
-price recalculation

------

# 4.Checkout
-User name and mobile number input
-Country code selection
-Country-specific mobile number validation
        -India (10 digits, starts with 6–9)
        -USA / UK basic format validation
-Error handling for invalid inputs


# 5.Booking Confirmation
-Success confirmaton screeen
-Option to start new Booking



# Edge Cases Implemented
-Invalid pickup/drop handling
-Dynamic price change on package update.
 

# Limitations
-No real Payment
