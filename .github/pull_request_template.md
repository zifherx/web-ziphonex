# 📋 Pull Request

## 🎯 Descripción

<!-- Describe los cambios realizados de manera clara y concisa -->

## 🔗 Issue relacionado

<!-- Menciona el issue relacionado: Closes #123 / Fixes #456 / Relates to #789 -->

## 🧪 Tipo de cambio

- [ ] 🐛 **Bug fix** (cambio que corrige un issue)
- [ ] ✨ **Nueva funcionalidad** (cambio que añade funcionalidad)
- [ ] 💥 **Breaking change** (cambio que puede romper funcionalidad existente)
- [ ] 📝 **Documentación** (cambios solo en documentación)
- [ ] 🎨 **Estilo** (formato, espacios, punto y coma, etc - sin cambios en código)
- [ ] ♻️ **Refactorización** (mejoras de código sin cambiar funcionalidad)
- [ ] ⚡ **Performance** (mejoras de rendimiento)
- [ ] ✅ **Tests** (añadir o corregir tests)
- [ ] 🔧 **Configuración** (cambios en archivos de config, build, etc)
- [ ] 🚀 **CI/CD** (cambios en workflows, deployments, etc)

## 🌍 Ambiente de destino

> **Flujo de trabajo:**
> Feature → `develop` → `release` → `main`

- [ ] **Development** (`develop` → web-dev.ziphonex.com)
- [ ] **Staging/Test** (`release` → web-test.ziphonex.com)
- [ ] **Production** (`main` → ziphonex.com)

## 📸 Screenshots / Video (si aplica)

<!--
Añade capturas de pantalla o videos que muestren los cambios visuales
Tip: Arrastra y suelta las imágenes directamente aquí
-->

## 🧪 ¿Cómo se ha probado?

<!-- Describe las pruebas realizadas para verificar los cambios -->

### Tests ejecutados:

- [ ] Tests unitarios locales (`pnpm test`)
- [ ] Tests de integración
- [ ] Tests E2E
- [ ] Pruebas manuales en ambiente de desarrollo
- [ ] Verificación en preview deployment de Vercel

### Casos de prueba:

1.
2.
3.

### Navegadores probados:

- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile (especificar: )

## ✅ Checklist de calidad

### Código

- [ ] Mi código sigue las guías de estilo del proyecto
- [ ] He realizado una auto-revisión de mi código
- [ ] He comentado el código en áreas complejas o difíciles de entender
- [ ] Mis cambios no generan nuevas advertencias
- [ ] No hay código comentado o console.logs innecesarios
- [ ] He eliminado dependencias no utilizadas

### Tests

- [ ] He añadido tests que prueban que mi cambio funciona
- [ ] Tests unitarios nuevos y existentes pasan localmente
- [ ] He verificado la cobertura de código (coverage)
- [ ] Los tests son significativos y no solo para aumentar coverage

### Documentación

- [ ] He actualizado la documentación correspondiente
- [ ] He actualizado el README si es necesario
- [ ] He añadido/actualizado comentarios JSDoc donde corresponde
- [ ] He documentado cambios en la API (si aplica)

### Performance y Seguridad

- [ ] No hay problemas de performance evidentes
- [ ] He considerado implicaciones de seguridad
- [ ] No expongo información sensible (API keys, tokens, etc)
- [ ] He validado inputs del usuario donde corresponde

### Deployment

- [ ] He probado en el ambiente de preview de Vercel
- [ ] El build de producción funciona correctamente (`pnpm run build`)
- [ ] No hay errores en la consola del navegador
- [ ] Las variables de entorno necesarias están documentadas

## 🔄 Migraciones / Cambios de DB (si aplica)

<!-- Si hay cambios en base de datos, esquemas, o migraciones -->

- [ ] Scripts de migración incluidos
- [ ] Migración probada localmente
- [ ] Plan de rollback documentado

## 🚨 Breaking Changes (si aplica)

<!-- Si este PR introduce breaking changes, descríbelos aquí -->

**¿Qué se rompe?**

**¿Cómo migrar?**

## 📦 Dependencias

<!-- Lista cualquier dependencia nueva o actualizada -->

**Nuevas dependencias:**

-

**Dependencias actualizadas:**

-

## 📝 Notas adicionales

<!-- Información adicional para los revisores -->

## 🎯 Post-merge tasks

<!-- Tareas que deben realizarse después del merge -->

- [ ]
- [ ]

---

## 📋 Checklist para Reviewers

- [ ] El código es claro y mantenible
- [ ] Los cambios están bien documentados
- [ ] Los tests son adecuados y pasan
- [ ] No hay problemas de seguridad evidentes
- [ ] El PR no introduce deuda técnica significativa
- [ ] Los cambios siguen los estándares del proyecto

---

**🤖 Deployment automático:** Este PR se desplegará automáticamente al hacer merge según la rama destino.
