let APEX_CODEFINEST =
  "CODE_UNIT_FINISHED;CODE_UNIT_STARTED;VARIABLE_SCOPE_BEGIN;VARIABLE_SCOPE_END; VARIABLE_ASSIGNMENT; STATEMENT_EXECUTE; BULK_COUNTABLE_STATEMENT_EXECUTE; EXCEPTION_THROWN; METHOD_ENTRY; METHOD_EXIT; CONSTRUCTOR_ENTRY; CONSTRUCTOR_EXIT; HEAP_ALLOCATE; BULK_HEAP_ALLOCATE; HEAP_DEALLOCATE; USER_DEBUG_FINEST; USER_DEBUG_FINER; USER_DEBUG_FINE; USER_DEBUG_DEBUG; USER_DEBUG_INFO; USER_DEBUG_WARN; USER_DEBUG_ERROR; EMAIL_QUEUE; FATAL_ERROR; VF_APEX_CALL; VF_PAGE_MESSAGE; ENTERING_MANAGED_PKG; HEAP_DUMP; SCRIPT_EXECUTION; PUSH_NOTIFICATION_NO_DEVICES; PUSH_NOTIFICATION_SENT; PUSH_NOTIFICATION_NOT_ENABLED; PUSH_NOTIFICATION_INVALID_CERTIFICATE; PUSH_NOTIFICATION_INVALID_APP; PUSH_NOTIFICATION_INVALID_NOTIFICATION; SESSION_CACHE_PUT_BEGIN; SESSION_CACHE_GET_BEGIN; SESSION_CACHE_PUT_END; SESSION_CACHE_GET_END; SESSION_CACHE_MEMORY_USAGE; SESSION_CACHE_REMOVE_BEGIN; SESSION_CACHE_REMOVE_END; ORG_CACHE_PUT_BEGIN; ORG_CACHE_GET_BEGIN; ORG_CACHE_PUT_END; ORG_CACHE_GET_END; ORG_CACHE_MEMORY_USAGE; ORG_CACHE_REMOVE_BEGIN; ORG_CACHE_REMOVE_END;";
let SYSTEMFINEST =
  "SYSTEM_METHOD_ENTRY; SYSTEM_METHOD_EXIT; SYSTEM_CONSTRUCTOR_ENTRY; SYSTEM_CONSTRUCTOR_EXIT; SYSTEM_MODE_ENTER; SYSTEM_MODE_EXIT; DUPLICATE_DETECTION_BEGIN; DUPLICATE_DETECTION_RULE_INVOCATION; DUPLICATE_DETECTION_MATCH_INVOCATION_SUMMARY; DUPLICATE_DETECTION_MATCH_INVOCATION_DETAILS; DUPLICATE_DETECTION_END; DUPLICATE_RULE_FILTER; DUPLICATE_RULE_FILTER_RESULT; DUPLICATE_RULE_FILTER_VALUE; PUSH_TRACE_FLAGS; POP_TRACE_FLAGS; MATCH_ENGINE_BEGIN; MATCH_ENGINE_INVOCATION; MATCH_ENGINE_END;";
let DBFINEST =
  "SOQL_EXECUTE_BEGIN; SOQL_EXECUTE_END; SOQL_EXECUTE_EXPLAIN; SOSL_EXECUTE_BEGIN; SOSL_EXECUTE_END; QUERY_MORE_ITERATIONS; QUERY_MORE_BEGIN; QUERY_MORE_END; DML_BEGIN; DML_END; IDEAS_QUERY_EXECUTE; SAVEPOINT_SET; SAVEPOINT_ROLLBACK;";
let WORKFLOWFINEST =
  "WF_RULE_INVOCATION; WF_APPROVAL; WF_FIELD_UPDATE; WF_SPOOL_ACTION_BEGIN; WF_ACTION; WF_FORMULA; WF_RULE_EVAL_BEGIN; WF_RULE_EVAL_END; WF_RULE_EVAL_VALUE; WF_CRITERIA_BEGIN; WF_CRITERIA_END; WF_RULE_ENTRY_ORDER; WF_RULE_NOT_EVALUATED; WF_RULE_FILTER; WF_ESCALATION_RULE; WF_ESCALATION_ACTION; WF_TIME_TRIGGERS_BEGIN; WF_TIME_TRIGGER; WF_ACTIONS_END; WF_ENQUEUE_ACTIONS; WF_APPROVAL_SUBMIT; WF_APPROVAL_SUBMITTER; WF_APPROVAL_REMOVE; WF_NEXT_APPROVER; WF_EVAL_ENTRY_CRITERIA; WF_PROCESS_FOUND; WF_SOFT_REJECT; WF_HARD_REJECT; WF_PROCESS_NODE; WF_ASSIGN; WF_REASSIGN_RECORD; WF_RESPONSE_NOTIFY; WF_OUTBOUND_MSG; WF_ACTION_TASK; WF_EMAIL_ALERT; WF_EMAIL_SENT; SLA_PROCESS_CASE; SLA_NULL_START_DATE; SLA_EVAL_MILESTONE; SLA_END; WF_KNOWLEDGE_ACTION; WF_SEND_ACTION; WF_CHATTER_POST; WF_QUICK_CREATE; WF_FLOW_ACTION_BEGIN; WF_FLOW_ACTION_DETAIL; WF_FLOW_ACTION_END; WF_FLOW_ACTION_ERROR; WF_FLOW_ACTION_ERROR_DETAIL; WF_APEX_ACTION; EVENT_SERVICE_PUB_BEGIN; EVENT_SERVICE_PUB_DETAIL; EVENT_SERVICE_PUB_END; EVENT_SERVICE_SUB_BEGIN; EVENT_SERVICE_SUB_DETAIL; EVENT_SERVICE_SUB_END; SCHEDULED_FLOW_DETAIL; FLOW_CREATE_INTERVIEW_BEGIN; FLOW_CREATE_INTERVIEW_END; FLOW_CREATE_INTERVIEW_ERROR; FLOW_START_INTERVIEWS_BEGIN; FLOW_START_INTERVIEWS_END; FLOW_START_INTERVIEWS_ERROR; FLOW_START_INTERVIEW_BEGIN; FLOW_START_INTERVIEW_END; FLOW_START_INTERVIEW_LIMIT_USAGE; FLOW_INTERVIEW_PAUSED; FLOW_INTERVIEW_RESUMED; FLOW_INTERVIEW_FINISHED; FLOW_INTERVIEW_FINISHED_LIMIT_USAGE; FLOW_ELEMENT_LIMIT_USAGE; FLOW_BULK_ELEMENT_LIMIT_USAGE; FLOW_ELEMENT_BEGIN; FLOW_ELEMENT_END; FLOW_ELEMENT_FAULT; FLOW_ELEMENT_DEFERRED; FLOW_ELEMENT_ERROR; FLOW_BULK_ELEMENT_BEGIN; FLOW_BULK_ELEMENT_END; FLOW_BULK_ELEMENT_DETAIL; FLOW_BULK_ELEMENT_NOT_SUPPORTED; FLOW_ASSIGNMENT_DETAIL; FLOW_SUBFLOW_DETAIL; FLOW_RULE_DETAIL; FLOW_VALUE_ASSIGNMENT; FLOW_LOOP_DETAIL; FLOW_ACTIONCALL_DETAIL; FLOW_WAIT_WAITING_DETAIL; FLOW_WAIT_RESUMING_DETAIL; FLOW_WAIT_EVENT_WAITING_DETAIL; FLOW_WAIT_EVENT_RESUMING_DETAIL; INVOCABLE_ACTION_DETAIL; INVOCABLE_ACTION_ERROR;";
let VALIDATIONFINEST =
  "VALIDATION_RULE; VALIDATION_FAIL; VALIDATION_PASS; VALIDATION_ERROR; VALIDATION_FORMULA;";
let CALLOUTFINEST =
  "CALLOUT_REQUEST_PREPARE; CALLOUT_REQUEST_FINALIZE; CALLOUT_REQUEST; CALLOUT_RESPONSE; XDS_RESPONSE; XDS_RESPONSE_DETAIL; XDS_RESPONSE_ERROR; XDS_REQUEST_DETAIL; NAMED_CREDENTIAL_REQUEST; NAMED_CREDENTIAL_RESPONSE; NAMED_CREDENTIAL_RESPONSE_DETAIL; EXTERNAL_SERVICE_REQUEST; EXTERNAL_SERVICE_RESPONSE;";
let APEX_PROFILINGFINEST =
  "CUMULATIVE_PROFILING_BEGIN; CUMULATIVE_PROFILING; CUMULATIVE_PROFILING_END; CUMULATIVE_LIMIT_USAGE; CUMULATIVE_LIMIT_USAGE_END; TESTING_LIMITS; LIMIT_USAGE; LIMIT_USAGE_FOR_NS; TOTAL_EMAIL_RECIPIENTS_QUEUED; STATIC_VARIABLE_LIST; STACK_FRAME_VARIABLE_LIST; REFERENCED_OBJECT_LIST;";
let VISUALFORCEFINEST =
  "VF_APEX_CALL_START; VF_APEX_CALL_END; VF_SERIALIZE_VIEWSTATE_BEGIN; VF_SERIALIZE_VIEWSTATE_END; VF_DESERIALIZE_VIEWSTATE_BEGIN; VF_DESERIALIZE_VIEWSTATE_END; VF_SERIALIZE_CONTINUATION_STATE_BEGIN; VF_SERIALIZE_CONTINUATION_STATE_END; VF_DESERIALIZE_CONTINUATION_STATE_BEGIN; VF_DESERIALIZE_CONTINUATION_STATE_END; VF_EVALUATE_FORMULA_BEGIN; VF_EVALUATE_FORMULA_END;";
let onlyDebugs =
  "USER_DEBUG_FINEST; USER_DEBUG_FINER; USER_DEBUG_FINE; USER_DEBUG_DEBUG; USER_DEBUG_INFO; USER_DEBUG_WARN; USER_DEBUG_ERROR;";

let WAVEFINEST =
  "TEMPLATE_PROCESSING_ERROR; WAVE_APP_LIFECYCLE; APP_CONTAINER_INITIATED; TEMPLATED_ASSET; TRANSFORMATION_SUMMARY; RULES_EXECUTION_SUMMARY; ASSET_DIFF_SUMMARY; JSON_DIFF_SUMMARY; RULES_EXECUTION_DETAIL; ASSET_DIFF_DETAIL; JSON_DIFF_DETAIL;";
let NBAFINEST =
  "NBA_STRATEGY_BEGIN; NBA_STRATEGY_END; NBA_NODE_BEGIN; NBA_NODE_END; NBA_STRATEGY_ERROR; NBA_NODE_ERROR; NBA_OFFER_INVALID; NBA_NODE_DETAIL;";
let Error = "All Errors;";
let allErrors =
  "WF_FLOW_ACTION_ERROR;WF_FLOW_ACTION_ERROR_DETAIL;FLOW_CREATE_INTERVIEW_ERROR;FLOW_START_INTERVIEWS_ERROR;FLOW_ELEMENT_ERROR;INVOCABLE_ACTION_ERROR;XDS_RESPONSE_ERROR;USER_DEBUG_ERROR;FATAL_ERROR;PUSH_NOTIFICATION_INVALID_CERTIFICATE;PUSH_NOTIFICATION_INVALID_APP;PUSH_NOTIFICATION_INVALID_NOTIFICATION;TEMPLATE_PROCESSING_ERROR;NBA_STRATEGY_ERROR;NBA_NODE_ERROR;EXCEPTION_THROWN;VALIDATION_ERROR;";

// infos
let APEX_CODEINFO =
  "CODE_UNIT_FINISHED;CODE_UNIT_STARTED;BULK_COUNTABLE_STATEMENT_EXECUTE; EXCEPTION_THROWN; USER_DEBUG_INFO; USER_DEBUG_WARN; USER_DEBUG_ERROR; EMAIL_QUEUE; FATAL_ERROR; VF_APEX_CALL; VF_PAGE_MESSAGE; HEAP_DUMP; SCRIPT_EXECUTION; PUSH_NOTIFICATION_NOT_ENABLED; PUSH_NOTIFICATION_INVALID_CERTIFICATE; PUSH_NOTIFICATION_INVALID_APP; PUSH_NOTIFICATION_INVALID_NOTIFICATION; SESSION_CACHE_PUT_BEGIN; SESSION_CACHE_GET_BEGIN; SESSION_CACHE_PUT_END; SESSION_CACHE_GET_END; SESSION_CACHE_MEMORY_USAGE; SESSION_CACHE_REMOVE_BEGIN; SESSION_CACHE_REMOVE_END; ORG_CACHE_PUT_BEGIN; ORG_CACHE_GET_BEGIN; ORG_CACHE_PUT_END; ORG_CACHE_GET_END; ORG_CACHE_MEMORY_USAGE; ORG_CACHE_REMOVE_BEGIN; ORG_CACHE_REMOVE_END;";
let DBINFO =
  "SOQL_EXECUTE_BEGIN; SOQL_EXECUTE_END; SOSL_EXECUTE_BEGIN; SOSL_EXECUTE_END; QUERY_MORE_ITERATIONS; DML_BEGIN; DML_END; SAVEPOINT_SET; SAVEPOINT_ROLLBACK;";
let CALLOUTINFO =
  "CALLOUT_REQUEST; CALLOUT_RESPONSE; XDS_RESPONSE; XDS_RESPONSE_ERROR; NAMED_CREDENTIAL_REQUEST; NAMED_CREDENTIAL_RESPONSE; EXTERNAL_SERVICE_REQUEST; EXTERNAL_SERVICE_RESPONSE;";
let SYSTEMINFO =
  "SYSTEM_MODE_ENTER; SYSTEM_MODE_EXIT; DUPLICATE_DETECTION_BEGIN; DUPLICATE_DETECTION_RULE_INVOCATION; DUPLICATE_DETECTION_MATCH_INVOCATION_SUMMARY; DUPLICATE_DETECTION_END; DUPLICATE_RULE_FILTER; DUPLICATE_RULE_FILTER_RESULT; DUPLICATE_RULE_FILTER_VALUE; PUSH_TRACE_FLAGS; POP_TRACE_FLAGS; MATCH_ENGINE_BEGIN; MATCH_ENGINE_INVOCATION; MATCH_ENGINE_END;";
let APEX_PROFILINGINFO =
  "CUMULATIVE_LIMIT_USAGE; CUMULATIVE_LIMIT_USAGE_END; TESTING_LIMITS;";
let WORKFLOWINFO =
  "WF_RULE_INVOCATION; WF_APPROVAL; WF_FIELD_UPDATE; WF_SPOOL_ACTION_BEGIN; WF_ACTION; WF_FORMULA; WF_RULE_EVAL_BEGIN; WF_RULE_EVAL_END; WF_RULE_EVAL_VALUE; WF_CRITERIA_BEGIN; WF_CRITERIA_END; WF_RULE_ENTRY_ORDER; WF_RULE_NOT_EVALUATED; WF_RULE_FILTER; WF_ESCALATION_RULE; WF_ESCALATION_ACTION; WF_TIME_TRIGGERS_BEGIN; WF_TIME_TRIGGER; WF_ACTIONS_END; WF_ENQUEUE_ACTIONS; WF_APPROVAL_SUBMIT; WF_APPROVAL_SUBMITTER; WF_APPROVAL_REMOVE; WF_NEXT_APPROVER; WF_EVAL_ENTRY_CRITERIA; WF_PROCESS_FOUND; WF_SOFT_REJECT; WF_HARD_REJECT; WF_PROCESS_NODE; WF_ASSIGN; WF_REASSIGN_RECORD; WF_RESPONSE_NOTIFY; WF_OUTBOUND_MSG; WF_ACTION_TASK; WF_EMAIL_ALERT; WF_EMAIL_SENT; SLA_PROCESS_CASE; SLA_NULL_START_DATE; SLA_EVAL_MILESTONE; SLA_END; WF_KNOWLEDGE_ACTION; WF_SEND_ACTION; WF_CHATTER_POST; WF_QUICK_CREATE; WF_FLOW_ACTION_BEGIN; WF_FLOW_ACTION_END; WF_FLOW_ACTION_ERROR; WF_FLOW_ACTION_ERROR_DETAIL; WF_APEX_ACTION; EVENT_SERVICE_PUB_BEGIN; EVENT_SERVICE_PUB_END; EVENT_SERVICE_SUB_BEGIN; EVENT_SERVICE_SUB_END; SCHEDULED_FLOW_DETAIL; FLOW_CREATE_INTERVIEW_BEGIN; FLOW_CREATE_INTERVIEW_END; FLOW_CREATE_INTERVIEW_ERROR; FLOW_START_INTERVIEWS_BEGIN; FLOW_START_INTERVIEWS_END; FLOW_START_INTERVIEWS_ERROR; FLOW_START_INTERVIEW_BEGIN; FLOW_START_INTERVIEW_END; FLOW_INTERVIEW_PAUSED; FLOW_INTERVIEW_RESUMED; FLOW_INTERVIEW_FINISHED; FLOW_ELEMENT_FAULT; FLOW_ELEMENT_ERROR; FLOW_BULK_ELEMENT_NOT_SUPPORTED; INVOCABLE_ACTION_ERROR;";
let VISUALFORCEINFO =
  "	VF_SERIALIZE_VIEWSTATE_BEGIN; VF_SERIALIZE_VIEWSTATE_END; VF_DESERIALIZE_VIEWSTATE_BEGIN; VF_DESERIALIZE_VIEWSTATE_END; VF_SERIALIZE_CONTINUATION_STATE_BEGIN; VF_SERIALIZE_CONTINUATION_STATE_END; VF_DESERIALIZE_CONTINUATION_STATE_BEGIN; VF_DESERIALIZE_CONTINUATION_STATE_END;";

//Error
let APEX_CODEERROR =
  "CODE_UNIT_FINISHED;CODE_UNIT_STARTED;USER_DEBUG_ERROR; FATAL_ERROR; PUSH_NOTIFICATION_INVALID_CERTIFICATE; PUSH_NOTIFICATION_INVALID_APP; PUSH_NOTIFICATION_INVALID_NOTIFICATION;";
let WORKFLOWERROR =
  "WF_FLOW_ACTION_ERROR; WF_FLOW_ACTION_ERROR_DETAIL; FLOW_CREATE_INTERVIEW_ERROR; FLOW_START_INTERVIEWS_ERROR; FLOW_ELEMENT_ERROR; INVOCABLE_ACTION_ERROR;";
let CALLOUTERROR = "XDS_RESPONSE_ERROR;";

// warn

let WORKFLOWWARN =
  "WF_FLOW_ACTION_ERROR; WF_FLOW_ACTION_ERROR_DETAIL; FLOW_CREATE_INTERVIEW_ERROR; FLOW_START_INTERVIEWS_ERROR; FLOW_ELEMENT_FAULT; FLOW_ELEMENT_ERROR; INVOCABLE_ACTION_ERROR;";
let APEX_CODEWARN =
  "	USER_DEBUG_WARN; USER_DEBUG_ERROR; FATAL_ERROR; PUSH_NOTIFICATION_INVALID_CERTIFICATE; PUSH_NOTIFICATION_INVALID_APP; PUSH_NOTIFICATION_INVALID_NOTIFICATION;";

//Debug

let APEX_CODEDEBUG =
  "CODE_UNIT_FINISHED;CODE_UNIT_STARTED;BULK_COUNTABLE_STATEMENT_EXECUTE; EXCEPTION_THROWN; USER_DEBUG_DEBUG; USER_DEBUG_INFO; USER_DEBUG_WARN; USER_DEBUG_ERROR; EMAIL_QUEUE; FATAL_ERROR; VF_APEX_CALL; VF_PAGE_MESSAGE; HEAP_DUMP; SCRIPT_EXECUTION; PUSH_NOTIFICATION_NO_DEVICES; PUSH_NOTIFICATION_SENT; PUSH_NOTIFICATION_NOT_ENABLED; PUSH_NOTIFICATION_INVALID_CERTIFICATE; PUSH_NOTIFICATION_INVALID_APP; PUSH_NOTIFICATION_INVALID_NOTIFICATION; SESSION_CACHE_PUT_BEGIN; SESSION_CACHE_GET_BEGIN; SESSION_CACHE_PUT_END; SESSION_CACHE_GET_END; SESSION_CACHE_MEMORY_USAGE; SESSION_CACHE_REMOVE_BEGIN; SESSION_CACHE_REMOVE_END; ORG_CACHE_PUT_BEGIN; ORG_CACHE_GET_BEGIN; ORG_CACHE_PUT_END; ORG_CACHE_GET_END; ORG_CACHE_MEMORY_USAGE; ORG_CACHE_REMOVE_BEGIN; ORG_CACHE_REMOVE_END;";
let SYSTEMDEBUG =
  "SYSTEM_MODE_ENTER; SYSTEM_MODE_EXIT; DUPLICATE_DETECTION_BEGIN; DUPLICATE_DETECTION_RULE_INVOCATION; DUPLICATE_DETECTION_MATCH_INVOCATION_SUMMARY; DUPLICATE_DETECTION_MATCH_INVOCATION_DETAILS; DUPLICATE_DETECTION_END; DUPLICATE_RULE_FILTER; DUPLICATE_RULE_FILTER_RESULT; DUPLICATE_RULE_FILTER_VALUE; PUSH_TRACE_FLAGS; POP_TRACE_FLAGS; MATCH_ENGINE_BEGIN; MATCH_ENGINE_INVOCATION; MATCH_ENGINE_END;";

// fine

let WORKFLOWFINE =
  "WF_RULE_INVOCATION; WF_APPROVAL; WF_FIELD_UPDATE; WF_SPOOL_ACTION_BEGIN; WF_ACTION; WF_FORMULA; WF_RULE_EVAL_BEGIN; WF_RULE_EVAL_END; WF_RULE_EVAL_VALUE; WF_CRITERIA_BEGIN; WF_CRITERIA_END; WF_RULE_ENTRY_ORDER; WF_RULE_NOT_EVALUATED; WF_RULE_FILTER; WF_ESCALATION_RULE; WF_ESCALATION_ACTION; WF_TIME_TRIGGERS_BEGIN; WF_TIME_TRIGGER; WF_ACTIONS_END; WF_ENQUEUE_ACTIONS; WF_APPROVAL_SUBMIT; WF_APPROVAL_SUBMITTER; WF_APPROVAL_REMOVE; WF_NEXT_APPROVER; WF_EVAL_ENTRY_CRITERIA; WF_PROCESS_FOUND; WF_SOFT_REJECT; WF_HARD_REJECT; WF_PROCESS_NODE; WF_ASSIGN; WF_REASSIGN_RECORD; WF_RESPONSE_NOTIFY; WF_OUTBOUND_MSG; WF_ACTION_TASK; WF_EMAIL_ALERT; WF_EMAIL_SENT; SLA_PROCESS_CASE; SLA_NULL_START_DATE; SLA_EVAL_MILESTONE; SLA_END; WF_KNOWLEDGE_ACTION; WF_SEND_ACTION; WF_CHATTER_POST; WF_QUICK_CREATE; WF_FLOW_ACTION_BEGIN; WF_FLOW_ACTION_DETAIL; WF_FLOW_ACTION_END; WF_FLOW_ACTION_ERROR; WF_FLOW_ACTION_ERROR_DETAIL; WF_APEX_ACTION; EVENT_SERVICE_PUB_BEGIN; EVENT_SERVICE_PUB_END; EVENT_SERVICE_SUB_BEGIN; EVENT_SERVICE_SUB_END; SCHEDULED_FLOW_DETAIL; FLOW_CREATE_INTERVIEW_BEGIN; FLOW_CREATE_INTERVIEW_END; FLOW_CREATE_INTERVIEW_ERROR; FLOW_START_INTERVIEWS_BEGIN; FLOW_START_INTERVIEWS_END; FLOW_START_INTERVIEWS_ERROR; FLOW_START_INTERVIEW_BEGIN; FLOW_START_INTERVIEW_END; FLOW_INTERVIEW_PAUSED; FLOW_INTERVIEW_RESUMED; FLOW_INTERVIEW_FINISHED; FLOW_ELEMENT_BEGIN; FLOW_ELEMENT_END; FLOW_ELEMENT_FAULT; FLOW_ELEMENT_DEFERRED; FLOW_ELEMENT_ERROR; FLOW_BULK_ELEMENT_BEGIN; FLOW_BULK_ELEMENT_END; FLOW_BULK_ELEMENT_NOT_SUPPORTED; INVOCABLE_ACTION_ERROR;";
let APEX_CODEFINE =
  "CODE_UNIT_FINISHED;CODE_UNIT_STARTED;BULK_COUNTABLE_STATEMENT_EXECUTE; EXCEPTION_THROWN; METHOD_ENTRY; METHOD_EXIT; CONSTRUCTOR_ENTRY; CONSTRUCTOR_EXIT; USER_DEBUG_FINE; USER_DEBUG_DEBUG; USER_DEBUG_INFO; USER_DEBUG_WARN; USER_DEBUG_ERROR; EMAIL_QUEUE; FATAL_ERROR; VF_APEX_CALL; VF_PAGE_MESSAGE; ENTERING_MANAGED_PKG; HEAP_DUMP; SCRIPT_EXECUTION; PUSH_NOTIFICATION_NO_DEVICES; PUSH_NOTIFICATION_SENT; PUSH_NOTIFICATION_NOT_ENABLED; PUSH_NOTIFICATION_INVALID_CERTIFICATE; PUSH_NOTIFICATION_INVALID_APP; PUSH_NOTIFICATION_INVALID_NOTIFICATION; SESSION_CACHE_PUT_BEGIN; SESSION_CACHE_GET_BEGIN; SESSION_CACHE_PUT_END; SESSION_CACHE_GET_END; SESSION_CACHE_MEMORY_USAGE; SESSION_CACHE_REMOVE_BEGIN; SESSION_CACHE_REMOVE_END; ORG_CACHE_PUT_BEGIN; ORG_CACHE_GET_BEGIN; ORG_CACHE_PUT_END; ORG_CACHE_GET_END; ORG_CACHE_MEMORY_USAGE; ORG_CACHE_REMOVE_BEGIN; ORG_CACHE_REMOVE_END;";

let Category = new Map();

let logAnalysisTabItems = [];
let timeStart;

let soqlAnalysis = new Map();
let soqlObjArry = [];
let dmlObjArry = [];
let debugObjArry = [];
let errorobjArry = [];
let codeflow = {};
let allErrorsArry = allErrors.split(";");
let filteredEventsSet = new Set();
let fileList = [];
let mapOfLogLinesByIndex = new Map();
let fileSize = 0;

/*APEX_CODE,DEBUG
APEX_PROFILING,FINEST
CALLOUT,FINEST
DB,FINEST
NBA,NONE
SYSTEM,FINE
VALIDATION,INFO
VISUALFORCE,FINER
WAVE,NONE
WORKFLOW,FINER*/
//@@CreatedBy : Bhargav Alla
//@@purpose : on onload  loading the different log categorys
window.onload = function createLogCategoryDataStructure() {
  Category.set("APEX_CODEFINEST", APEX_CODEFINEST.split(";"));
  Category.set("SYSTEMFINEST", SYSTEMFINEST.split(";"));
  Category.set("DBFINEST", DBFINEST.split(";"));
  Category.set("WORKFLOWFINEST", WORKFLOWFINEST.split(";"));
  Category.set("VALIDATIONFINEST", VALIDATIONFINEST.split(";"));
  Category.set("CALLOUTFINEST", CALLOUTFINEST.split(";"));
  Category.set("APEX_PROFILINGFINEST", APEX_PROFILINGFINEST.split(";"));
  Category.set("VISUALFORCEFINEST", VISUALFORCEFINEST.split(";"));
  Category.set("onlyDebugs", onlyDebugs.split(";"));
  Category.set("Error", Error.split(";"));
  Category.set("APEX_CODEINFO", APEX_CODEINFO.split(";"));
  Category.set("DBINFO", DBINFO.split(";"));
  Category.set("CALLOUTINFO", CALLOUTINFO.split(";"));
  Category.set("SYSTEMINFO", SYSTEMINFO.split(";"));
  Category.set("APEX_PROFILINGINFO", APEX_PROFILINGINFO.split(";"));
  Category.set("WORKFLOWINFO", WORKFLOWINFO.split(";"));
  Category.set("VISUALFORCEINFO", VISUALFORCEINFO.split(";"));
  Category.set("APEX_CODEERROR", APEX_CODEERROR.split(";"));
  Category.set("WORKFLOWERROR", WORKFLOWERROR.split(";"));
  Category.set("CALLOUTERROR", CALLOUTERROR.split(";"));
  Category.set("WORKFLOWWARN", WORKFLOWWARN.split(";"));
  Category.set("APEX_CODEWARN", APEX_CODEWARN.split(";"));
  Category.set("APEX_CODEDEBUG", APEX_CODEDEBUG.split(";"));
  Category.set("SYSTEMDEBUG", SYSTEMDEBUG.split(";"));
  Category.set("WORKFLOWFINE", WORKFLOWFINE.split(";"));
  Category.set("APEX_CODEFINE", APEX_CODEFINE.split(";"));

  Category.set("WAVEFINEST", WAVEFINEST.split(";"));
  Category.set("NBAFINEST", NBAFINEST.split(";"));

  logAnalysisTabItems.push("Main_Log");
  logAnalysisTabItems.push("Code_Flow");
  logAnalysisTabItems.push("Debugs");
  logAnalysisTabItems.push("Errors");
  logAnalysisTabItems.push("SoQl_Briefs");
  logAnalysisTabItems.push("DMLs");

  // console.log("database==" + Category.get("database"));
};

//@@CreatedBy : Bhargav Alla
//@@Purpose   : This function is used to show all log events under log categorys.

function createLogItems(Categorys) {
  let loggingLevelPanels = document.getElementById("loggingLevels");
  let logEnumsDivs = document.getElementById("logLevels");
  let logPatterns = Array.from(Categorys.keys());
  for (let i = 0; i < logPatterns.length; i++) {
    let createLogCategoryButton = document.createElement("a");
    createLogCategoryButton.setAttribute("href", "#" + logPatterns[i]);
    createLogCategoryButton.innerText = logPatterns[i];
    createLogCategoryButton.setAttribute("role", "button");
    createLogCategoryButton.setAttribute("aria-expanded", "false");
    createLogCategoryButton.setAttribute("aria-controls", logPatterns[i]);
    createLogCategoryButton.setAttribute("class", "btn btn-primary");
    createLogCategoryButton.setAttribute("data-toggle", "collapse");

    loggingLevelPanels.appendChild(createLogCategoryButton);
    loggingLevelPanels.innerHTML += "&nbsp;&nbsp;&nbsp;";

    let divcol = document.createElement("div");
    divcol.setAttribute("class", "col");
    let divcolapsesection = document.createElement("div");
    divcolapsesection.setAttribute("class", "collapse multi-collapse");
    divcolapsesection.setAttribute("id", logPatterns[i]);
    let divCard = document.createElement("div");
    divCard.setAttribute("class", "card card-body");
    let events = Categorys.get(logPatterns[i]);
    //console.log(events.length);
    for (let i = 0; i < events.length; i++) {
      if (events[i] == "") continue;
      let createDivFrChkBx = document.createElement("div");
      createDivFrChkBx.setAttribute("class", "custom-control custom-checkbox");
      let label = document.createElement("label");
      label.innerText = events[i];
      label.setAttribute("for", events[i]);
      label.setAttribute("class", "custom-control-label");
      let inptChkBox = document.createElement("input");
      inptChkBox.setAttribute("type", "checkbox");
      inptChkBox.setAttribute("class", "custom-control-input");
      inptChkBox.setAttribute("id", events[i]);
      createDivFrChkBx.appendChild(inptChkBox);
      createDivFrChkBx.appendChild(label);
      divCard.appendChild(createDivFrChkBx);
    }
    divcolapsesection.appendChild(divCard);
    divcol.appendChild(divcolapsesection);
    logEnumsDivs.appendChild(divcol);
  }
  // apply event listeners to all input checkbox to get the filter options.
  collectUserEventSelection();
  // create a code flow struture
  // createCodeFlowStruture();
}
//@@CreatedBy : Bhargav Alla
//@@Purpose : This function is used to show the brief of logs by creating   seprated tabs at UI Level.
function logAnalysisTabs() {
  let ulElmnt = document.getElementById("logAnalysisTabs");
  let tabContentPanel = document.getElementById("logAnalysisTabsContent");
  for (let i = 0; i < logAnalysisTabItems.length; i++) {
    let liItem = document.createElement("li");
    liItem.setAttribute("class", "nav-item");
    liItem.setAttribute("role", "presentation");
    let liItemAnchrTag = document.createElement("a");
    liItemAnchrTag.setAttribute("class", "nav-link active");
    liItemAnchrTag.setAttribute("id", logAnalysisTabItems[i]);
    liItemAnchrTag.setAttribute("role", "tab");
    // liItemAnchrTag.addEventListener("click", showTabContent);
    if (i == 0) {
      liItemAnchrTag.setAttribute("class", "nav-link active");
    } else {
      liItemAnchrTag.setAttribute("class", "nav-link");
    }
    liItemAnchrTag.setAttribute("data-toggle", "tab");
    liItemAnchrTag.setAttribute("href", "#" + logAnalysisTabItems[i] + "s");
    liItemAnchrTag.setAttribute("aria-controls", logAnalysisTabItems[i] + "s");
    liItemAnchrTag.innerText = logAnalysisTabItems[i];
    liItem.appendChild(liItemAnchrTag);
    ulElmnt.appendChild(liItem);

    let tabContent = document.createElement("div");
    if (i == 0) {
      tabContent.setAttribute("class", "tab-pane fade show active");
      liItemAnchrTag.setAttribute("aria-selected", "true");
    } else {
      tabContent.setAttribute("class", "tab-pane fade");
      liItemAnchrTag.setAttribute("aria-selected", "false");
    }
    tabContent.setAttribute("id", logAnalysisTabItems[i] + "s");
    tabContent.setAttribute("role", "tabpanel");
    tabContent.setAttribute("aria-labelledby", logAnalysisTabItems[i]);
    //tabContent.innerText = logAnalysisTabItems[i];
    tabContentPanel.appendChild(tabContent);
  }
}
//@@CreatedBy : Bhargav Alla
//@@purpose : used to create tab content active for all tabs selections.
function showTabContent(event) {
  //get the element that is clicked
  let ele = event.target;
  //debugger;
  //get the element id of the element that is clicked
  let eleId = ele.id;
  document.querySelectorAll(".nav-link").forEach(element => {
    element.setAttribute("aria-selected", "false");
    // console.log(element);
  });
  let sletectedTab = document.getElementById(eleId);
  sletectedTab.setAttribute("aria-selected", "true");
}

//@@CreatedBy : Bhargav Alla
//@purpose : pre process of file on choose of file.
function proceesFile(event) {
  fileList = event.target.files;
  //console.log(fileList);
  let fileName = fileList[0].name;
  fileSize = fileList[0].size;
  // console.log(fileName.split("."));
  if (fileName.split(".")[1] != "log") {
    alert(
      "Please Enter Log file you are entering wrong file, check file have .log type"
    );
    fileList = [];
  } else {
    document.getElementById("nameOfFile").innerText = fileName;
  }
}
//@@CreatedBy : Bhargav Alla
//@@purpose : to handle drop of file.
function allowDrop(event) {
  event.stopPropagation();
  event.preventDefault();
  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = "copy";
}
//@@CreatedBy : Bhargav Alla
//@@purpose : to handle drop of file.
function drop(event) {
  event.stopPropagation();
  event.preventDefault();
  fileList = event.dataTransfer.files;
  console.log(fileList);
  let fileName = fileList[0].name;
  fileSize = fileList[0].size;
  //console.log(fileName.split("."));
  if (fileName.split(".")[1] != "log") {
    alert(
      "Please Enter Log file you are entering wrong file, check file have .log type"
    );
    fileList = [];
  } else {
    document.getElementById("nameOfFile").innerText = fileName;
  }
}
//@@CreatedBy : Bhargav Alla
//@@purpsoe : main analysis function called from button
function startAnalysis() {
  showStatus();
  timeStart = performance.now();
  readLogFile(fileList[0]);
  logAnalysisTabs();
}
//@@CreatedBy : Bhargav Alla
//@@Purpsoe : To show the status while processsing.
function showStatus() {
  document.getElementById("btnStatus").classList.remove("invisible");
  document.getElementById("btnStatus").classList.add("visible");
  let btn = document.getElementById("analysisButton");
  btn.setAttribute("disabled", "true");
}
//@@CreatedBy : Bhargav Alla
//@@purpose : To hide thet status after process complete.
function hideStatus() {
  document.getElementById("btnStatus").classList.remove("visible");
  document.getElementById("btnStatus").classList.add("invisible");
  let btn = document.getElementById("analysisButton");
  btn.removeAttribute("disabled");
}
//@@CreatedBy : Bhargav Alla
//@@Purpose : This function is used to read the text file and pass final file to analysis function.
function readLogFile(file) {
  const reader = new FileReader();
  reader.addEventListener("load", event => {
    startAnalysisfile(event.target.result);
  });

  reader.readAsText(file);
}
//@@CreatedBy : Bhargav Alla
//@Purpose : This finction is used to analysis the log text file an passing to different fn to show the things in UI
function startAnalysisfile(file) {
  //console.log(file);
  file.split("\n").forEach(analyzLogLineByLine);
  Main_LogFN(file);
  hideStatus();

  // Tabs Content update functions
  showNoofSoqlRun(soqlObjArry); //  for no of soqls
  showNoofDmlHappend(dmlObjArry); // for no of dmls
  showDebugStatements(debugObjArry); // for debug statments
  showErrors(errorobjArry); // All Errors

  let timeEnd = performance.now();
  let timeTakenForParsing = (timeEnd - timeStart) / 1000;
  document.getElementById("timeLapse").innerText =
    timeTakenForParsing.toFixed(3) + "s";
}

let code_FLowData = {};
let codeFlowChildrenArry = [];
let isItRoot = true;
//@@CreatedBy : Bhargav Alla
//purpose : This is main function each log line analysied for particular mappings.
function analyzLogLineByLine(item, index) {
  if (index == 0) {
    //APEX_CODE,DEBUG;APEX_PROFILING,FINEST;CALLOUT,FINEST;DB,FINEST;NBA,NONE;SYSTEM,FINE;VALIDATION,INFO;VISUALFORCE,FINER;WAVE,NONE;WORKFLOW,FINER
    let logCategorys = item.split(";");
    let logCatgryMap = new Map();

    for (let i = 0; i < logCategorys.length; i++) {
      let ctItmAry = logCategorys[i].split(",");
      if (i == 0) {
        let ctmitm = ctItmAry[0].substr(5, ctItmAry[0].length) + ctItmAry[1];
        // console.log(ctmitm);
        if (ctItmAry[1] != "NONE" && Category.has(ctmitm)) {
          logCatgryMap.set(ctmitm, Category.get(ctmitm));
        } else if (ctItmAry[1] != "NONE") {
          let ctmitms = ctItmAry[0].substr(5, ctItmAry[0].length) + "FINEST";
          logCatgryMap.set(ctmitms, Category.get(ctmitms));
        }
      } else {
        let ctmitm = ctItmAry[0] + ctItmAry[1];
        //console.log(ctmitm);
        //console.log(Category.has(ctmitm));
        if (ctItmAry[1] != "NONE" && Category.has(ctmitm)) {
          logCatgryMap.set(ctmitm, Category.get(ctmitm));
        } else if (ctItmAry[1] != "NONE") {
          let ctmitms = ctItmAry[0] + "FINEST";
          logCatgryMap.set(ctmitms, Category.get(ctmitms));
        }
      }
    }
    logCatgryMap.set("onlyDebugs", Category.get("onlyDebugs"));
    logCatgryMap.set("Error", Category.get("Error"));

    //console.log(logCatgryMap);

    createLogItems(logCatgryMap);
  }

  let LineArry = item.split("|");
  /// Soql Extractions
  if (
    LineArry[1] == "SOQL_EXECUTE_BEGIN" ||
    LineArry[1] == "SOQL_EXECUTE_END"
  ) {
    if (LineArry[1] == "SOQL_EXECUTE_BEGIN") {
      let soqlObj = {};
      soqlObj.index = index;
      soqlObj.codeLine = LineArry[2];
      soqlObj.query = LineArry[4];
      soqlObj.retrievedRows = null;
      soqlObjArry.push(soqlObj);
    }
    if (LineArry[1] == "SOQL_EXECUTE_END") {
      let soqlUpdatedObj = soqlObjArry[soqlObjArry.length - 1];
      soqlUpdatedObj.retrievedRows = LineArry[3].split(":")[1];
      soqlObjArry[soqlObjArry.length - 1] = soqlUpdatedObj;
    }
  }
  // Dml Extractions
  else if (LineArry[1] == "DML_BEGIN" || LineArry[1] == "DML_END") {
    if (LineArry[1] == "DML_BEGIN") {
      let dmlObj = {};
      dmlObj.index = index;
      dmlObj.codeLine = LineArry[2];
      dmlObj.operation = LineArry[3].split(":")[1];
      dmlObj.typeOfObject = LineArry[4].split(":")[1];
      dmlObj.noOfRows = LineArry[5].split(":")[1];
      dmlObj.endofOperation = null;
      dmlObj.endIndex = null;
      dmlObjArry.push(dmlObj);
    }
    if (LineArry[1] == "DML_END") {
      let exactIndex = null;
      for (let i = 0; i < dmlObjArry.length; i++) {
        let dmlObjCrnt = dmlObjArry[i];
        if (dmlObjCrnt.codeLine == LineArry[2] && dmlObjCrnt.endIndex ==null) {
          exactIndex = i;
          break;
        }
      }
      if(exactIndex !=null)
      {
      let dmlUpdatedObj = dmlObjArry[exactIndex];
      // console.log(LineArry);
      dmlUpdatedObj.endofOperation = LineArry[2];
      dmlUpdatedObj.endIndex = index;
      dmlObjArry[exactIndex] = dmlUpdatedObj;
      }  
    }
  }

  // Debug Extractions
  else if (LineArry[1] == "USER_DEBUG") {
    let debugObj = {};
    debugObj.index = index;
    debugObj.codeLine = LineArry[2];
    debugObj.LogLevel = LineArry[3];
    debugObj.Data = LineArry[4];
    debugObjArry.push(debugObj);
  }
  // Errors Extractions
  else if (allErrorsArry.includes(LineArry[1])) {
    let errorObj = {};
    errorObj.index = index;
    errorObj.typeOfException = LineArry[1];
    errorObj.errorMessage = LineArry.slice(2, LineArry.length).join(" ");
    errorobjArry.push(errorObj);
  }
  // code flow data creation
  else if (
    LineArry[1] == "CODE_UNIT_STARTED" ||
    LineArry[1] == "CODE_UNIT_FINISHED"
  ) {
    if (LineArry[1] == "CODE_UNIT_STARTED") {
      if (isItRoot) {
        code_FLowData.name = LineArry[3].startsWith("01p")
          ? LineArry[3]
          : LineArry[3].startsWith("01q")
          ? LineArry[5].split("/")[1] + "(" + LineArry[5].split("/")[0].replace('__','').replace('_',' ') + ")"
          : LineArry[4];
        code_FLowData.label = LineArry[4];
        code_FLowData.index = index;
        code_FLowData.value = 10;
        code_FLowData.children = null;
        code_FLowData.level = "yellow";
        code_FLowData.type = "black";
        code_FLowData.codeBlockId = LineArry[3];
        code_FLowData.endIndex = null;
        isItRoot = false;
      } else {
        let childCodeBlock = {};
        childCodeBlock.name = LineArry[3].startsWith("01p")
          ? LineArry[3]
          : LineArry[3].startsWith("01q")
          ? LineArry[5].split("/")[1] + "(" + LineArry[5].split("/")[0].replace('__','').replace('_',' ') + ")"
          : LineArry[4];
        childCodeBlock.label = LineArry[4];
        childCodeBlock.value = 5;
        childCodeBlock.index = index;
        childCodeBlock.children = null;
        childCodeBlock.level = "grey";
        childCodeBlock.type = "blue";
        childCodeBlock.codeBlockId = LineArry[3];
        childCodeBlock.endIndex = null;
        codeFlowChildrenArry.push(childCodeBlock);
      }
    }
    if (LineArry[1] == "CODE_UNIT_FINISHED") {
      let exactIndexofblck = null;
      for (let i = 0; i < codeFlowChildrenArry.length; i++) {
        if (
          codeFlowChildrenArry[i].label == LineArry[2] &&
          codeFlowChildrenArry[i].endIndex == null
        ) {
          exactIndexofblck = i;
          break;
        }
      }
      if (exactIndexofblck != null) {
        let codBlockObj = codeFlowChildrenArry[exactIndexofblck];
        // console.log(codBlockObj);
        codBlockObj.endIndex = index;
        codeFlowChildrenArry[exactIndexofblck] = codBlockObj;
      } //  check if it is root node
      else {
        if (LineArry[2] == code_FLowData.label) {
          code_FLowData.endIndex = index;
          code_FLowData.children = codeFlowChildrenArry;
          createCodeFlowStruture(code_FLowData);
        }
      }
    }
  }
  if(LineArry[1] !='USER_DEBUG')
  {
    mapOfLogLinesByIndex.set(index+(item.includes('|') ? '___'+LineArry[1] :''),item);
  }
  else{
    mapOfLogLinesByIndex.set(index+(item.includes('|') ? '___'+LineArry[1]+'_'+LineArry[3] :''),item);
  }
  
}
//@@CreatedBy : Bhargav Alla
//@@Purpose   : To show the maim log under main log tab.
function Main_LogFN(file) {
  let main_Log = document.getElementById("Main_Logs");
  console.log(fileSize);
  if(fileSize < 2000000)
  {
    main_Log.innerText = file;
    let filterTheLogByEvents = document.getElementById('filterTheLogByEvents');
    filterTheLogByEvents.style.display = 'inline';

  }
  else
  {
   let filterTheLogByEvents = document.getElementById('filterTheLogByEvents');
   filterTheLogByEvents.style.display = 'inline';
   main_Log.innerHTML = '<h1 style="font-size:20px;font-wieght:bold;text-align:center;padding-top:30px;">file size is more than 2 MB ,can you please apply filters using log category buttons,and click apply filter button and filtered log item will apper here. Mean while you can check debugs,soql briefs,code flow and dmls.</h1>';

  }

}
//@@CreatedBy : Bhargav Alla
//@@purpose : To show the number of soql executed under  SoQl_Briefs Tab

function showNoofSoqlRun(soqlObjArry) {
  let SoQl_Briefs = document.getElementById("SoQl_Briefss");
  if (soqlObjArry.length == 0) {
    SoQl_Briefs.innerHTML =
      '<p class="info_message">No Soqls found.</p>';
    return;
  }
  let createDiv = document.createElement("div");

  createDiv.setAttribute("class", "table-responsive text-nowrap");

  let table = document.createElement("table");

  table.setAttribute("class", "table");
  table.setAttribute("id", "dtBasicExample");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.innerText = "Actual Index";
  tr.appendChild(th1);
  let th2 = document.createElement("th");
  th2.innerText = "Code Line";
  tr.appendChild(th2);
  let th3 = document.createElement("th");
  th3.innerText = "Soql Query";
  tr.appendChild(th3);
  let th4 = document.createElement("th");
  th4.innerText = "Retrieved Rows";
  tr.appendChild(th4);
  thead.appendChild(tr);

  let tbody = document.createElement("tbody");

  for (let obj in soqlObjArry) {
    //console.log(soqlObjArry[obj]);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerText = soqlObjArry[obj].index;
    let td1 = document.createElement("td");
    td1.innerText = soqlObjArry[obj].codeLine;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = soqlObjArry[obj].query;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.innerText = soqlObjArry[obj].retrievedRows;
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  createDiv.appendChild(table);
  SoQl_Briefs.appendChild(createDiv);
}
//@@CreatedBy : Bhargav Alla
//@@purpose : This function is used to the no'f dml happened in log,under DMLs Tabs DMLs

function showNoofDmlHappend(dmlsArry) {
  let DMLss = document.getElementById("DMLss");
  if (dmlsArry.length == 0) {
    DMLss.innerHTML =
      '<p class="info_message">No DMLs found.</p>';
    return;
  }
  let createDiv = document.createElement("div");

  createDiv.setAttribute("class", "table-responsive text-nowrap");

  let table = document.createElement("table");

  table.setAttribute("class", "table");
  table.setAttribute("id", "dtBasicExample");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.innerText = "Actual Index";
  tr.appendChild(th1);
  let th2 = document.createElement("th");
  th2.innerText = "Code Line";
  tr.appendChild(th2);
  let th3 = document.createElement("th");
  th3.innerText = "Operation";
  tr.appendChild(th3);
  let th4 = document.createElement("th");
  th4.innerText = "Object Name";
  tr.appendChild(th4);
  let th5 = document.createElement("th");
  th5.innerText = "No Of Rows";
  tr.appendChild(th5);
  let th6 = document.createElement("th");
  th6.innerText = "End Of Operation";
  tr.appendChild(th6);

  let th7 = document.createElement("th");
  th7.innerText = "End Of Operation With Index";
  tr.appendChild(th7);

  thead.appendChild(tr);

  let tbody = document.createElement("tbody");

  for (let obj in dmlsArry) {
    //console.log(dmlsArry[obj]);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerText = dmlsArry[obj].index;
    let td1 = document.createElement("td");
    td1.innerText = dmlsArry[obj].codeLine;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = dmlsArry[obj].operation;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.innerText = dmlsArry[obj].typeOfObject;
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.innerText = dmlsArry[obj].noOfRows;
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    td5.innerText = dmlsArry[obj].endofOperation;
    tr.appendChild(td5);
    let td6 = document.createElement("td");
    td6.innerText = dmlsArry[obj].endIndex;
    tr.appendChild(td6);
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  createDiv.appendChild(table);
  DMLss.appendChild(createDiv);
}

//@@CreatedBy : Bhargav Alla
//@@purpose : This function is usd to show the debug statements under Debug tab.

function showDebugStatements(debugsArry) {
  let Debugs = document.getElementById("Debugss");
  if (debugsArry.length == 0) {
    Debugs.innerHTML =
      '<p class="info_message">No Debugs found.</p>';
    return;
  }

  let createDiv = document.createElement("div");

  createDiv.setAttribute("class", "table-responsive text-nowrap");

  let table = document.createElement("table");

  table.setAttribute("class", "table");
  table.setAttribute("id", "dtBasicExample");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.innerText = "Actual Index";
  tr.appendChild(th1);
  let th2 = document.createElement("th");
  th2.innerText = "Code Line";
  tr.appendChild(th2);
  let th3 = document.createElement("th");
  th3.innerText = "Log Level";
  tr.appendChild(th3);
  let th4 = document.createElement("th");
  th4.innerText = "Data";
  tr.appendChild(th4);
  thead.appendChild(tr);

  let tbody = document.createElement("tbody");

  for (let obj in debugsArry) {
    //console.log(debugsArry[obj]);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerText = debugsArry[obj].index;
    let td1 = document.createElement("td");
    td1.innerText = debugsArry[obj].codeLine;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = debugsArry[obj].LogLevel;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.innerText = debugsArry[obj].Data;
    tr.appendChild(td3);
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  createDiv.appendChild(table);
  Debugs.appendChild(createDiv);
}

//@@CreatedBy : Bhargav Alla
//@@Purpose   : This function is used to show the errors in aog file under Errors Tab.

function showErrors(errorobjArry) {
  let errors = document.getElementById("Errorss");
  if (errorobjArry.length == 0) {
    errors.innerHTML =
      '<p class="info_message">No Errors found.</p>';
    return;
  }
  let createDiv = document.createElement("div");

  createDiv.setAttribute("class", "table-responsive text-nowrap");

  let table = document.createElement("table");

  table.setAttribute("class", "table");
  table.setAttribute("id", "dtBasicExample");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.innerText = "Actual Index";
  tr.appendChild(th1);
  let th2 = document.createElement("th");
  th2.innerText = "Type Of Exception";
  tr.appendChild(th2);
  let th3 = document.createElement("th");
  th3.innerText = "Error Message";
  tr.appendChild(th3);
  thead.appendChild(tr);

  let tbody = document.createElement("tbody");

  for (let obj in errorobjArry) {
    //console.log(errorobjArry[obj]);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerText = errorobjArry[obj].index;
    let td1 = document.createElement("td");
    td1.innerText = errorobjArry[obj].typeOfException;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = errorobjArry[obj].errorMessage;
    tr.appendChild(td2);
    tbody.appendChild(tr);
  }

  table.appendChild(thead);
  table.appendChild(tbody);
  createDiv.appendChild(table);
  errors.appendChild(createDiv);
}

//@@createdBy : Bhargav Alla
//@@Purpose   : This function is used to collect the filtered log events by assigning event listener.

function collectUserEventSelection() {
  document.querySelectorAll('input[type="checkbox"]').forEach(element => {
    element.addEventListener("click", () => {
      //console.log(event.target.value);
      console.log(event.target.id);
      let selectedEvnts = event.target.id;
      let selectedEvnt = selectedEvnts.trim();
      if (filteredEventsSet.has(selectedEvnt)) {
        if(selectedEvnt =='All Errors')
        {
          allErrors.split(";").forEach(item => filteredEventsSet.delete(item)) 
          filteredEventsSet.delete('All Errors');
        }
       
        filteredEventsSet.delete(selectedEvnt);
      } 
      else {
        filteredEventsSet.add(selectedEvnt);
      }
      console.log(filteredEventsSet);
    });
  });
}

function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function(n) {
  if (this.root == null) {
    this.root = n;
  } else {
    this.root.addvalue(n);
  }
};
Node.prototype.addNodeValue = function(n) {
  if (this.hasChildren) {
    this.value = n.value;
    this.index = n.index;
    this.label = n.label;
    this.directChilds.push(n);
  }
};

function node() {
  this.name = null;
  this.value = null;
  this.index = null;
  this.children = [];
  this.level = null;
  this.type = null;
  this.codeBlockId = null;
}

//@@CreatedBy : Bhargav Alla
//@@Purpose   : This function is used to create the timeline of code execution events.
function createCodeFlowStruture(code_FLowData) {
  //console.log(code_FLowData);
  let code_Flow = document.getElementById("Code_Flows");
  //  let code_FLowDataArry = Array.from(code_FLowData);
  // <div class="text-center tracking-status-intransit"><p class="tracking-status text-tight">Code Flow</p></div>
  let timelineHtml =
    '<div class="row"> <div class="col-md-12 col-lg-12"><div id="tracking-pre"></div><div id="tracking"><div class="tracking-list">';
  //debugger;
  const {
    name,
    label,
    index,
    value,
    children,
    level,
    type,
    codeBlockId,
    endIndex
  } = code_FLowData;
  let innerHtml =
  '<div class="tracking-item"><div class="tracking-icon status-intransit"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="apex"><path d="M78 67.5H44.4c-1 0-1.9.9-1.9 1.9v3.7c0 1 .9 1.9 1.9 1.9H78c1 0 1.9-.9 1.9-1.9v-3.7c0-1.1-.9-1.9-1.9-1.9zM49.2 44.8L25.1 25.4c-.7-.6-1.9-.5-2.5.4l-2.1 3c-.6.9-.4 2 .4 2.6L38 45.1c.6.5.6 1.5 0 2L20.8 60.9c-.7.6-1 1.9-.4 2.6l2.1 3.2c.6.9 1.7 1 2.5.4l24.2-19.3c1-.8 1-2.3 0-3z"></path></svg></div><div class="tracking-date">';
    innerHtml +=
    "(" +
    index +
    "--" +
    endIndex +
    ")" +
    '</div><div class="tracking-content">' +
    label +
    "<br/>" +
    name +
    "</div></div>";
  timelineHtml += innerHtml;
  for (let obj of children) {
  //  console.log(obj.codeBlockId);
    let innerHtml =
    obj.codeBlockId.startsWith('01p') ? '<div class="tracking-item"><div class="tracking-icon status-intransit"><svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="apex"><path d="M78 67.5H44.4c-1 0-1.9.9-1.9 1.9v3.7c0 1 .9 1.9 1.9 1.9H78c1 0 1.9-.9 1.9-1.9v-3.7c0-1.1-.9-1.9-1.9-1.9zM49.2 44.8L25.1 25.4c-.7-.6-1.9-.5-2.5.4l-2.1 3c-.6.9-.4 2 .4 2.6L38 45.1c.6.5.6 1.5 0 2L20.8 60.9c-.7.6-1 1.9-.4 2.6l2.1 3.2c.6.9 1.7 1 2.5.4l24.2-19.3c1-.8 1-2.3 0-3z"></path></svg></div><div class="tracking-date">' : '<div class="tracking-item"><div class="tracking-icon status-intransit"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 52 52" id="script"><path d="M44 6.8c-8.8 0-15.6 6.9-15.6 15.7v21.1c0 .8.7 1.5 1.5 1.5h16.7c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.2v-2.9c0-4.9 4.8-9.8 9.7-9.8h2.6c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H44zm-24.4 0C10.8 6.8 4 13.7 4 22.6v21.1c0 .8.7 1.5 1.5 1.5h16.7c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.9v-2.9c0-4.9 4.8-9.8 9.7-9.8h2.6c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-2.6z"></path></svg></div><div class="tracking-date">';
        innerHtml +=
      "(" +
      obj.index +
      "--" +
      obj.endIndex +
      ")" +
      '</div><div class="tracking-content">' +
      obj.label +
      "<br/>" +
      obj.name + "<br/>"+ 'ID -'+obj.codeBlockId+
        "</div></div>";
    timelineHtml += innerHtml;
  }
  // console.log(timelineHtml);
  timelineHtml += "</div></div></div></div>";
  //console.log(timelineHtml);
  code_Flow.innerHTML = timelineHtml;
}

//@@CreatedBy : Bhargav alla
//@@Purpsoe   : This function is used filter the log based one events.
let selecteditems = [];
let filterLogLineArry = [];

function filterTheLogByEvents()
{
  if(filteredEventsSet.has('All Errors'))
  {
    allErrors.split(";").forEach(item => filteredEventsSet.add(item))
  }
  selectedItems = Array.from(filteredEventsSet).map(el => el.trim());
  filterLogLineArry = [];
  
  mapOfLogLinesByIndex.forEach(iterateOverLogForFilterItems);
  let main_Log = document.getElementById("Main_Logs");
  if (filterLogLineArry.length == 0 && selectedItems.length == 0) {
    main_Log.innerHTML =
      '<p class="info_message">Please apply filter and see the log lines here.</p>';
    return;
  }
  else if(filterLogLineArry.length == 0){
    main_Log.innerHTML =
      '<p class="info_message">There is no log lines with selected event.</p>';
    return;
  }
  else
  {
    let createDiv = document.createElement("div");

  createDiv.setAttribute("class", "table-responsive text-nowrap");

  let table = document.createElement("table");

  table.setAttribute("class", "table");
  table.setAttribute("id", "dtBasicExample");
  let thead = document.createElement("thead");
  let tr = document.createElement("tr");
  let th1 = document.createElement("th");
  th1.innerText = "Actual Index";
  tr.appendChild(th1);
  let th2 = document.createElement("th");
  th2.innerText = "Line";
  tr.appendChild(th2);
  thead.appendChild(tr);
  let tbody = document.createElement("tbody");

  for (let obj in filterLogLineArry) {
    //console.log(filterLogLineArry[obj]);
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    tr.appendChild(td);
    td.innerText = filterLogLineArry[obj].index;
    let td1 = document.createElement("td");
    td1.innerText = filterLogLineArry[obj].item;
    tr.appendChild(td1);
    tbody.appendChild(tr);
  }
  table.appendChild(thead);
  table.appendChild(tbody);
  createDiv.appendChild(table);
  main_Log.innerText = '';
  main_Log.appendChild(createDiv);
  }
   
}

 //@@CreatedBy : Bhargva alla
 //@@Purpose    : This function is uesd to filter the log lines by comparing the user selection.
 function iterateOverLogForFilterItems(value, key, map)
 {
  {
    if(key.includes('___') && selectedItems.includes(key.split('___')[1]))
    {
      let selectedObj = {};
      selectedObj.index = key.split('___')[0];
      selectedObj.item = value;
      filterLogLineArry.push(selectedObj);
    }
  }

 }