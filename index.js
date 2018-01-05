/**
 * Class for building action names for Redux. It provides clean and simple syntax
 * with optional groups and prefixes/suffixes.
 */
export default class ActionNameBuilder {
  constructor({ group = null, prefix = '[', suffix = ']', underline = false } = {}) {
    this.group = group === null ? '' : `${prefix}${group}${suffix} `;
    this.underline = underline;
  }
  
  /**
   * Method for converting given action name.
   * 
   * @param {string} string - what to convert
   * @returns {string} - converted string
   */
  format(string) {
    const formattedString = string.toUpperCase();
    
    if (this.underline) {
      return formattedString.replace(new RegExp(/ /g), '_');
    } else {
      return formattedString;
    }
  }
  
  /**
   * Method that generated the action.
   * 
   * @param {string} action - action to generate
   * @returns {string} - formatted action
   */
  make(action) {
    return this.format(`${this.group}${action}`);
  }
}
