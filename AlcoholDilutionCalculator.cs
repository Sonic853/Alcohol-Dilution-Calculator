namespace Sonic853
{
    public class AlcoholDilutionCalculator
    {
        public static AlcoholResult AlcoholDilutionCalculator(float sourceAlcohol, float sourceMl, float targetAlcohol)
        {
            float waterMl = (sourceAlcohol - targetAlcohol) * sourceMl / targetAlcohol;
            float targetMl = sourceMl + waterMl;
            return new AlcoholResult(){
                SourceAlcohol = sourceAlcohol,
                SourceMl = sourceMl,
                TargetAlcohol = targetAlcohol,
                TargetMl = targetMl,
                WaterMl = waterMl
            };
        }
        public static AlcoholResult CalculateSourceMl(float sourceAlcohol, float targetAlcohol, float targetMl)
        {
            float sourceMl = targetAlcohol * targetMl / sourceAlcohol;
            float waterMl = targetMl - sourceMl;
            return new AlcoholResult(){
                SourceAlcohol = sourceAlcohol,
                SourceMl = sourceMl,
                TargetAlcohol = targetAlcohol,
                TargetMl = targetMl,
                WaterMl = waterMl
            };
        }
    }
    public class AlcoholResult
    {
        public float SourceAlcohol;
        public float SourceMl;
        public float TargetAlcohol;
        public float TargetMl;
        public float WaterMl;
    }
}