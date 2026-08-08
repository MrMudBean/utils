/**
 * @module @vvi/utils/json
 * @file json.ts
 * @description 尝试转化数据
 * @author Mr.MudBean <Mr.MudBean@outlook.com>
 * @copyright 2026 ©️ Mr.MudBean
 * @since 2026-08-08 11:19
 * @version 2.1.0
 * @lastModified 2026-08-08 19:18
 */

/**
 * # 尝试使用 `JSON.parse` 解析
 * *简单对字符串数据化。不适用于复杂场景*
 * @param v - 尝试解析的字符串
 * @returns 返回能够被 `JSON.parse()` 解析后的值，不能解析则返回原参数
 * @example
 * ```ts
 * tryJSONSparse('null'); // null
 * tryJSONsparse('1');    // 1
 * tryJSONsparse('"1"');  // '1'
 * ```
 */
export function tryJSONParse(v: string) {
  try {
    return JSON.parse(v);
  } catch {
    return v;
  }
}

/**
 * # 尝试使用 `JSON.stringify()` 转换为字符串
 * *简单把数据字符串化，不适用于复杂场景*
 * @param v
 * @example
 * ```ts
 * tryJSONStringify(null); // 'null'
 * tryJSONStringify(1);    //  '1'
 * tryJSONStringify('123');  // '"123"'  
 * ```
 */
export function tryJSONStringify(v: any) {
  try {
    return JSON.stringify(v);
  } catch {
    return String(v);
  }
}
