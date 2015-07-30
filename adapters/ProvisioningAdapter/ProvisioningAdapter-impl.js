/**
* Copyright 2015 IBM Corp.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

function validateCSR(clientDN, csrContent){
	WL.Logger.info("validateCSR :: clientDN :: " + JSON.stringify(clientDN));
	WL.Logger.info("validateCSR :: csrContent :: " + JSON.stringify(csrContent));

	var activationCode = csrContent.activationCode;
	var response;
	
	// This is a place to perform validation of csrContent and update clientDN if required.
	// You can do it using adapter backend connectivity
	if (activationCode === "mobilefirst"){
		response = {
			isSuccessful: true, 
			clientDN: clientDN + ",CN=someCustomData",
			attributes: {
				customAttribute: "some-custom-attribute"
			}
		};
	} else {
		response = {
			isSuccessful: false,
			errors: ["Invalid activation code"]
		};
	}

	return response;
}

function validateCertificate(certificate,customAttributes){
	WL.Logger.info("validateCertificate :: certificate :: " + JSON.stringify(certificate));
	WL.Logger.info("validateCertificate :: customAttributes :: " + JSON.stringify(customAttributes));
	
	// Additional custom certificate validations can be performed here.

	return {
		isSuccessful: true
	};
}

