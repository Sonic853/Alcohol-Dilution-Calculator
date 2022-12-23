/**
 * 酒精稀释计算器：已知当前酒精度数，当前酒精毫升，需要加水稀释后的度数，求加入多少毫升水
 * @param {number} sourceAlcohol 当前酒精度数
 * @param {number} sourceMl 当前酒精毫升
 * @param {number} targetAlcohol 需要加水稀释后的度数
 * @returns {{targetMl: number, waterMl: number}} 稀释后的酒精毫升，以及加入多少毫升水
 */
const alcoholDilutionCalculator = (sourceAlcohol, sourceMl, targetAlcohol) => {
    const waterMl = Math.round(((sourceAlcohol - targetAlcohol) * sourceMl / targetAlcohol) * 100) / 100
    const targetMl = sourceMl + waterMl
    return { targetMl, waterMl }
}
/**
 * 酒精稀释计算器：已知当前酒精度数，需要加水稀释后的度数，需要稀释后的酒精毫升，求加入多少毫升酒精，以及加入多少毫升水
 * @param {number} sourceAlcohol 当前酒精度数
 * @param {number} targetAlcohol 需要加水稀释后的度数
 * @param {number} targetMl 稀释后的酒精毫升
 * @returns {{sourceMl: number, waterMl: number}} 加入多少毫升酒精，以及加入多少毫升水
 */
const calculateSourceMl = (sourceAlcohol, targetAlcohol, targetMl) => {
    const sourceMl = Math.round((targetAlcohol * targetMl / sourceAlcohol) * 100) / 100
    const waterMl = targetMl - sourceMl
    return { sourceMl, waterMl }
}