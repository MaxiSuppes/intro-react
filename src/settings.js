export function getSetting(variableName) {
    const variablePrefix = 'REACT_APP_';
    const variableFullName = variablePrefix + variableName;
    
    return process.env[variableFullName];
}