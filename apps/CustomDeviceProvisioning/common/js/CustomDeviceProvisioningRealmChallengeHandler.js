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

var customDevProvChallengeHandler = 
	WL.Client.createProvisioningChallengeHandler("CustomDeviceProvisioningRealm");

var aChallenge;
$("#submitProvCodeButton").click(function(){
	var customCsrProperties = {
		activationCode: $("#provisioningCode").val()
	};
	customDevProvChallengeHandler.submitCustomCsr(customCsrProperties, aChallenge);
});

customDevProvChallengeHandler.createCustomCsr = function(challenge){
	WL.Logger.debug("createCustomCsr :: " + JSON.stringify(challenge));
	
	aChallenge = challenge; 
	$("#AppBody").hide();
	$("#ProvBody").show();
	$("#provisioningCode").val("");
	
	if (challenge.error) {
		$("#provisioningErrorDiv").html(challenge.error);
	} else { 
		$("#provisioningErrorDiv").html("Enter activation code:");
	} 
};

customDevProvChallengeHandler.processSuccess = function(identity) {
	WL.Logger.debug("processSuccess :: " + JSON.stringify(identity));
	$("#connectToServerButton").hide();
	$("#AppBody").show();
	$("#ProvBody").hide();
	$("#AppBody").html("<p>Device authentication with custom device provisioning was successfully completed.</p>");
};

customDevProvChallengeHandler.handleFailure = function(){
	WL.Logger.debug("handleFailure");
	$("#AppBody").show();
	$("#ProvBody").hide();
	$("#wrapper").text("MobileFirst Server rejected your device. You will need to re-install the application and perform device provisioning again.");
};
