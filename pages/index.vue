<template>
  <ASpace
    direction="vertical"
    :size="'large'"
    :style="{ margin: '0 auto', display: 'block' }"
  >
    <ATypographyTitle
      :level="2"
      style="text-align: center; margin-bottom: 2rem; font-size: 1.875rem"
    >
      asf
    </ATypographyTitle>
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th class="padding-left"></th>
            <th>asf</th>
            <th>asf</th>
            <th>asf</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="padding-left">asf</td>
            <td>asf</td>
            <td>
              <span class="desktop">asf</span>
              <i-mdi-emoticon-happy-outline class="mobile" />
            </td>
            <td>asf</td>
          </tr>
          <tr>
            <td class="padding-left">
              <LogoComponent height="1rem;" />
            </td>
            <td>CZK</td>
            <td>
              <span class="desktop">TEST</span>
              <i-mdi-emoticon-happy-outline class="mobile" />
            </td>
            <td>TEst</td>
          </tr>
          <tr>
            <td class="padding-left">TEst</td>
            <td>CZK</td>
            <td>
              <span class="desktop">TEst</span>
              <i-mdi-emoticon-sad-outline class="mobile" />
            </td>
            <td>Test</td>
          </tr>
        </tbody>
      </table>
    </div>
  </ASpace>
</template>

<script setup lang="ts">
const config = useRuntimeConfig();

const consultationPrice = 99;
const firmPrice = 750;
</script>

<style scoped lang="less">
.table-wrapper {
  padding: 0.625rem 0;
  max-width: 45rem;
  margin: 0 auto;

  @media (min-width: 1000px) {
    background-color: white;
    border-radius: 0.75rem;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
  }

  table {
    table-layout: fixed;
    width: 100%;
    font-weight: 500;

    th {
      padding: 1.25rem 0;
      color: #9b9b9b;
      font-weight: 700;
      text-align: center;
    }

    td {
      padding: 1.25rem 0;
      border-top: 1px solid #efefef;
      width: auto;
      text-align: center;
    }

    .padding-left {
      text-align: left;
      width: 7rem;

      @media (min-width: 1000px) {
        width: 17rem;
        padding-left: 1.875rem;
      }
    }
  }

  .desktop {
    display: none;

    @media (min-width: 1000px) {
      display: block;
    }
  }

  .mobile {
    display: none;
    margin: 0 auto;
    line-height: 1.5rem;

    @media (max-width: 1000px) {
      display: block;
    }
  }
}
</style>
